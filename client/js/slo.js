Template.subject.rendered = function() {


    $('#prerequisite').tokenfield({
            autocomplete: {
                source: ['PRG1101', 'PRG1102', 'CSC1101'],
                delay: 100
            },
            showAutocompleteOnFocus: true
        });

    /*
      Subject Learning Outcomes

    */
    var $contextMenu = $("#contextMenu");

    $(document).on('contextmenu', '.token-label', function(e) {
      e.preventDefault();
      /* Act on the event */
      // alert('gotcha!');
      console.log($(this).html());
      $("#target-link").attr("href", "/" + $(this).html()).attr("target", "_blank");

      $contextMenu.css({
            display: "block",
            left: e.pageX-93,
            top: e.pageY-75,
            zIndex: 100
      });
      return false;
    });

    $contextMenu.on("click", "a", function() {
       $contextMenu.hide();
    });

    var count_slo = 1;

    // tokenfield initialized here, input changed
    if (count_slo == 1) {
        $('#po-1').tokenfield({
            autocomplete: {
                source: ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8', 'PO9'],
                delay: 100
            },
            showAutocompleteOnFocus: true
        });
    }

    $(document).on('click', '.btn-add', function(e) {
        // Error Handling
        e.preventDefault();

        // Incrementing count
        count_slo = count_slo + 1;

        // Cloning the 0 element
        var controlTable = $('.table-body'),
            currentEntry = $('#slo-field-0'),
            newEntry = $(currentEntry.clone()).appendTo(controlTable);

        // Enumeration
        var newID = 'slo-field-' + count_slo;

        newEntry.find('input').val(''); // Empty all input values
        newEntry.find("input:first").val(count_slo); // Fill ID number
        newEntry.attr("id", newID); // Change cloned element ID

        // This method below doesn't work because HTML DOM involvement
        /*
      document.getElementById("autofill").innerHTML = 'hubala';
      $('#' + newID +' td.autofill').empty().append('<b>whyyyy</b>');
    */

        $('#' + newID + ' td input#po-0 ').attr("id", 'po-' + count_slo).attr("name", 'po-' + count_slo); //chaining
        $('#' + newID + ' th input#slo-id-0 ').attr("id", 'slo-id-' + count_slo).attr("name", 'slo-id-' + count_slo);
        $('#' + newID + ' td textarea#slo-0 ').attr("id", 'slo-' + count_slo).attr("name", 'slo-' + count_slo);

        $('#po-' + count_slo).tokenfield({
            autocomplete: {
                source: ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8', 'PO9'],
                delay: 100
            },
            showAutocompleteOnFocus: true
        });
    }).on('click', '.btn-remove', function(e) {
        // Error Handling
        e.preventDefault();

        // Prevention to remove the first element
        if (count_slo !== 1) {
            $('#slo-field-' + count_slo).remove();
            count_slo = count_slo - 1;
        } else {
            alert("Removing row failed. Reason: there's only one row left");
        }

        return false;
    });

    /*
      Mark

    */

    var count_mark = 1;

    $(document).on('click', '.btn-add-mark', function(e)
    {
        e.preventDefault();

        var controlTable = $('.table-body-mark'),
            currentEntry = $('#mark-field-0'),
            newEntry = $(currentEntry.clone()).appendTo(controlTable);

        count_mark = count_mark + 1;

        var newID = 'mark-field-' + count_mark;

        newEntry.find('input').val('');
        newEntry.find("input:first").val(count_mark);
        newEntry.attr("id", newID);

        $('#' + newID + ' th input#mark-id-0 ').attr("id", 'mark-id-' + count_mark).attr("name", 'mark-id-' + count_mark);
        $('#' + newID + ' td input#type-0 ').attr("id", 'type-' + count_mark).attr("name", 'type-' + count_mark);
        $('#' + newID + ' td input#mark-0 ').attr("id", 'mark-' + count_mark).attr("name", 'mark-' + count_mark);

    }).on('click', '.btn-remove-mark', function(e)
    {
        e.preventDefault();

        if (count_mark !== 1) {
            $('#mark-field-' + count_mark).remove();
            count_mark = count_mark - 1;
        } else {
            alert("Removing row failed. Reason: there's only one row left");
        }
    
        return false;
    });


    /*
      Content Outline

    */

    var count_content = 1;
    var total_hours_ext = 0;

    $(document).on('click', '.btn-add-content', function(e)
    {
        e.preventDefault();

        var controlTable = $('.table-body-content'),
            currentEntry = $('#content-field-0'),
            newEntry = $(currentEntry.clone()).appendTo(controlTable);

        count_content = count_content + 1;

        var newID = 'content-field-' + count_content;

        newEntry.find('input').val('');
        newEntry.find("input:first").val(count_content);
        newEntry.attr("id", newID);

        $('#' + newID + ' th input#content-id-0 ').attr("id", 'content-id-' + count_content).attr("name", 'content-id-' + count_content);
        $('#' + newID + ' td input#title-0 ').attr("id", 'title-' + count_content).attr("name", 'title-' + count_content);
        $('#' + newID + ' td textarea#content-0 ').attr("id", 'content-' + count_content).attr("name", 'content-' + count_content);

        $('#' + newID + ' td input#lecture-0 ').attr("id", 'lecture-' + count_content).attr("name", 'lecture-' + count_content);
        $('#' + newID + ' td input#tutorial-0 ').attr("id", 'tutorial-' + count_content).attr("name", 'tutorial-' + count_content);
        $('#' + newID + ' td input#practical-0 ').attr("id", 'practical-' + count_content).attr("name", 'practical-' + count_content);
        $('#' + newID + ' td input#selfstudy-0 ').attr("id", 'selfstudy-' + count_content).attr("name", 'selfstudy-' + count_content);
        $('#' + newID + ' td input#total-0 ').attr("id", 'total-' + count_content).attr("name", 'total-' + count_content);
        
    }).on('click', '.btn-remove-content', function(e)
    {
        e.preventDefault();

        if (count_content !== 1) {
            $('#content-field-' + count_content).remove();
            count_content = count_content - 1;
        } else {
            alert("Removing row failed. Reason: there's only one row left");
        }
    
        return false;
    }).on('change', '.hours', function(event) {
      event.preventDefault();
      /* Act on the event */

      var total_hours_text = document.getElementById("total-hours");
      var total_hours = 0;

      for (var i = 1; i <= count_content; i++) {
        var newID = 'content-field-' + i;
        var total = $('#' + newID + ' td input#total-' + i);

        var lecture = parseInt($('#' + newID + ' td input#lecture-' + i).val(), 10);
        var tutorial = parseInt($('#' + newID + ' td input#tutorial-' + i).val(), 10);
        var practical = parseInt($('#' + newID + ' td input#practical-' + i).val(), 10);
        var selfstudy = parseInt($('#' + newID + ' td input#selfstudy-' + i).val(), 10);

        if (isNaN(lecture)) {
          lecture = 0;
        }
        if (isNaN(tutorial)) {
          tutorial = 0;
        }
        if (isNaN(practical)) {
          practical = 0;
        }
        if (isNaN(selfstudy)) {
          selfstudy = 0;
        }

        total.val(lecture + tutorial + practical + selfstudy);
        /*console.log(total.val());
        console.log(lecture);
        console.log(tutorial);
        console.log(practical);
        console.log(selfstudy);*/

        total_hours = total_hours + parseInt(total.val(), 10);

        if (total_hours < 160 && !isNaN(lecture) && !isNaN(tutorial) && !isNaN(practical) && !isNaN(selfstudy)) {          
          document.getElementById("btn-add-content").disabled = false;
          total_hours_text.style.color = 'black';
          total_hours_text.innerHTML = 'Total hours: ' + total_hours;
        }
        else if (total_hours >= 160){
          document.getElementById("btn-add-content").disabled = true;
          total_hours_text.style.color = 'red';
          total_hours_text.innerHTML = 'Total hours: ' + total_hours;
          alert("For 4 credit subjects, the 160 credit hours limit has been reached. Please update learning time.");
        }

        
      }
    }).on('click', '#btn-remove-content', function(event) {
      event.preventDefault();
      /* Act on the event */
      var total_hours_text = document.getElementById("total-hours");
      var total_hours = 0;

      for (var i = 1; i <= count_content; i++) {
        var newID = 'content-field-' + i;
        var total = $('#' + newID + ' td input#total-' + i);

        var lecture = parseInt($('#' + newID + ' td input#lecture-' + i).val(), 10);
        var tutorial = parseInt($('#' + newID + ' td input#tutorial-' + i).val(), 10);
        var practical = parseInt($('#' + newID + ' td input#practical-' + i).val(), 10);
        var selfstudy = parseInt($('#' + newID + ' td input#selfstudy-' + i).val(), 10);

        if (isNaN(lecture)) {
          lecture = 0;
        }
        if (isNaN(tutorial)) {
          tutorial = 0;
        }
        if (isNaN(practical)) {
          practical = 0;
        }
        if (isNaN(selfstudy)) {
          selfstudy = 0;
        }

        total.val(lecture + tutorial + practical + selfstudy);

        console.log(total.val());
        console.log(lecture);
        console.log(tutorial);
        console.log(practical);
        console.log(selfstudy);

        total_hours = total_hours + parseInt(total.val(), 10);
      }

      if (total_hours < 160) {
          document.getElementById("btn-add-content").disabled = false;
          total_hours_text.style.color = 'black';
          total_hours_text.innerHTML = 'Total hours: ' + total_hours;
          alert('all safe!');
        } 
        else if (total_hours >= 160){
          total_hours_text.style.color = 'red';
          total_hours_text.innerHTML = 'Total hours: ' + total_hours;
          alert("For 4 credit subjects, the 160 credit hours limit has been reached. Please update learning time.");
        }
    });;

    /*
    controlTable.find('.field:not(:last) .btn-add-content')
        .removeClass('btn-add-content').addClass('btn-remove-content')
        .removeClass('btn-success').addClass('btn-danger')
        .html('-');
        */

    /*$("table.table-content tr").each(function( i ) {
      $("td:not(:last)", this).each(function( j ) {
        // console.log("".concat("row: ", i, ", col: ", j, ", value: ", $(this).text()));
        if (j == 0) {
          newEntry.find("input:first").val(count_content);
        }

        if (j == 2) {
          newEntry.find("#lecture-1").attr('data-bind', 'value: lecture[' + (count_content - 1) + ']"');
          newEntry.find("#lecture-1").attr('id', 'lecture-' + count_content);
        }
        if (j == 3) {
          newEntry.find("#tutorial-1").attr('data-bind', 'value: tutorial[' + (count_content - 1) + ']"');
          newEntry.find("#tutorial-1").attr('id', 'tutorial-' + count_content);
        }
        if (j == 4) {
          newEntry.find("#practical-1").attr('data-bind', 'value: practical[' + (count_content - 1) + ']"');
          newEntry.find("#practical-1").attr('id', 'practical-' + count_content);
        }
        if (j == 5) {
          newEntry.find("#selfstudy-1").attr('data-bind', 'value: selfstudy[' + (count_content - 1) + ']"');
          newEntry.find("#selfstudy-1").attr('id', 'selfstudy-' + count_content);
        }/*
        if (j == 6) {
          newEntry.find("#total-1").attr('data-bind', 'value: total[' + (count_content - 1) + ']"');
          newEntry.find("#total-1").attr('id', 'total-' + count_content);
        }

        if (j == 1) {
          console.log("".concat("row: ", i, ", col: ", j, ", value: ", $(this).find("input").val()), $(this).find("textarea").val());
        } else {
          console.log("".concat("row: ", i, ", col: ", j, ", value: ", $(this).find("input").val()));
        }
    });
    */
    // console.log(viewModel[1].lecture);

    /*var viewModel = kendo.observable({
        contentID: [
          "1", 
          "2"
        ],
    });   */         
    // console.log('viewModel initialized');



    /*var hours = kendo.observable({
      lecture: [],
      tutorial: [],
      practical: [],
      selfstudy: [],
      // total: []
      // total: []
                
          function() {
          return this.get("lecture[" + (count_content - 1) + "]") + this.get("tutorial[" + (count_content - 1) + "]") + this.get("practical[" + (count_content - 1) + "]") + this.get("selfstudy[" + (count_content - 1) + "]");
          }
        
      
    });*/
    // console.log('totalHours initialized');

    // $(".hours").keyup(function(event) {

      /*var lecture = hours.get("lecture[" + (count_content - 1) + "]");
      var tutorial = hours.get("tutorial[" + (count_content - 1) + "]");
      var practical = hours.get("practical[" + (count_content - 1) + "]");
      var selfstudy = hours.get("selfstudy[" + (count_content - 1) + "]");*/

      /*var testing = function() {
          return hours.get("lecture[" + (count_content - 1) + "]") + hours.get("tutorial[" + (count_content - 1) + "]") + hours.get("practical[" + (count_content - 1) + "]") + hours.get("selfstudy[" + (count_content - 1) + "]");
          }

      hours.set("total[" + (count_content - 1) + "]", testing);
      console.log('succeed?');*/
      // console.log($("#lecture-" + count_content).val());
      // $("#total-" + count_content).text($("#lecture-" + count_content).val());
      /*
      hours.set("total[" + (count_content - 1) + "]", (lecture+tutorial+practical+selfstudy));
      console.log('did it work?');*/
    // });

    /*(hours.get("lecture[" + (count_content - 1) + "]") + hours.get("tutorial[" + (count_content - 1) + "]") + hours.get("practical[" + (count_content - 1) + "]") + hours.get("selfstudy[" + (count_content - 1) + "]")*/

    /*var totalHours = kendo.observable ({

    });*/

    // kendo.bind($(".table-content"), hours);


}