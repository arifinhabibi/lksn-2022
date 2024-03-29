<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lksn_jawa_barat_2022' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'KInaP,Q*p8+28i9K2h@k6+arzmSc#d)i^A:3s0+=zsA(;qrPh:x%}_x`/x*78BU]' );
define( 'SECURE_AUTH_KEY',  '7yqq|3t%2PkLZD=u=1=6/yg|s:n`w8{g`[ny`-Sv1-M@tz9|G@0yK$U*9fW;LauX' );
define( 'LOGGED_IN_KEY',    '&XcP3PY.g]d$I5rIN[=f=J;[*gwu9xkdzJ)2[v>/@QFa3.9Vkul@VDKuEUg&8(eM' );
define( 'NONCE_KEY',        '%KGz`Y_dh9INh]qU_[~z-;rRnl5h`FA59oY0^)5@%uX{@_;hD$g>wV,EN/f[Zn1@' );
define( 'AUTH_SALT',        'wsqnr&%a*8.^[BM?|+:#w{?P?Fz}-;n#662W9sw-r;cxL=X}>03CAg0n&lK7oETf' );
define( 'SECURE_AUTH_SALT', 'H+xE2;Xn6xEF-5{skmJFJyi&Z|=6Gw<5 KD+5&[q|VdPH|99:#+:38aCjz_]ojGF' );
define( 'LOGGED_IN_SALT',   'd>~2/z65yx/c?a+wfu`O*k6|YZGpbucLXz=@r!u(qH%#aXOq1z/c:`;j?D9tpkwh' );
define( 'NONCE_SALT',       'UQf:cY!m_$[&A5j?@P5jM4R$u1E*XxgLRzTPz7d+EA,g*yRW6H^@sM!CwXEtZgl9' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
