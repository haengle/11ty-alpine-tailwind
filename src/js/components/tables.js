export default () => ({
 
  mobiletable: {
    ['x-init']() {
      var table = this.$el;
          var allRows = table.getElementsByTagName('tr');
          var firstRow = allRows[0];
          const [, ...dataRows] = allRows;

          dataRows.forEach(data => {
              var cells = [...(data.children)];
              for (let [index, cell] of cells.entries()) {
                  var cellItem = cell;
                  cellItem.setAttribute('data-label', firstRow.children[index].textContent)
              }
          });
    },
    [':class']() {
       return 'table--mobile'
    },
  },

  demandtable: {
    ['x-init']() {
        var table = this.$el;
          var cells = table.getElementsByTagName('td');
          [...cells].forEach(cell => {
            var cellText = cell.textContent.toLowerCase();
            if (cellText === 'high') {
              cell.innerHTML = '<span class="high">High <i class="fas fa-arrow-trend-up"></i></span>';
            }
            if (cellText === 'medium') {
              cell.innerHTML = '<span class="medium">Medium <i class="fas fa-arrows-left-right"></i></span>';
            }
            if (cellText === 'low') {
              cell.innerHTML = '<span class="low">Low <i class="fas fa-arrow-trend-down"></i></span>';
            }
          })
      }      
  },

  earningstable: {
    ['x-init']() {
        var table = this.$el;
        var earningsCol = table.querySelectorAll('tbody tr td:last-child');
        var earningsArr = [];
        
        [...earningsCol].forEach((earn) => {
          earningsArr.push(parseInt(earn.textContent.replace(',','').replace('$','')));
        });

        var maxEarning = Math.max(...earningsArr);

        [...earningsCol].forEach((earn) => {
          var amount = parseInt(earn.textContent.replace(',','').replace('$',''));
          var amountPercent = (amount / maxEarning) * 100;
          earn.innerHTML = `${earn.textContent} <span class="bar" style="width:${amountPercent}%"></span>`;
        });
    }
  }
  
});
