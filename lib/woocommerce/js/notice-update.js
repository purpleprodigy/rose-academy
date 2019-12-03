/**
 * This script adds notice dismissal to the Rose Academy theme.
 *
 * @package Academy
 * @author StudioPress
 * @license GPL-2.0+
 */

jQuery(document).on( 'click', '.academy-woocommerce-notice .notice-dismiss', function() {

	jQuery.ajax({
		url: ajaxurl,
		data: {
			action: 'academy_dismiss_woocommerce_notice'
		}
	});

});
