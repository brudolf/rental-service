var $ = django.jQuery;

$(document).ready(function() {

    $('.field-rental_item_lightshaper').hide();
    $('.field-rental_item_bundle').hide();
    $('.field-rental_item_product').hide();

    $('#id_items-0-rentel_item_type').change(function(e) {
      console.log('lsd')
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-1-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-2-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-3-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-4-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-5-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-6-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-7-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-8-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-9-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-10-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-11-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-12-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-13-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-14-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-15-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-16-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-17-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
    $('#id_items-18-rentel_item_type').change(function(e) {
      var optionSelected = $("option:selected", this)[0].index;
      var lightshaper = $("option:selected", this).parents('.aligned').children('.field-rental_item_lightshaper');
      var bundle = $("option:selected", this).parents('.aligned').children('.field-rental_item_bundle');
      var product = $("option:selected", this).parents('.aligned').children('.field-rental_item_product');
      switch (optionSelected) {
        case 1:
          lightshaper.show();
          bundle.hide();
          product.hide();
          break;
          case 2:
            lightshaper.hide();
            bundle.show();
            product.hide();
            break;
          case 3:
            lightshaper.hide();
            bundle.hide();
            product.show();
            break;
        default:
      }
    });
});
