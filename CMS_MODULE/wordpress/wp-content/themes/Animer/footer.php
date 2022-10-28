
<footer id="footer" role="contentinfo">
        <div class="container-footer">
            <div class="row">
                <div class="col-brand">
                    <div class="brand">
                        <h2>Animer</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab tenetur vero nihil nostrum, sed temporibus cum officiis nemo ex nam mollitia aspernatur placeat illo sunt quidem nobis consequuntur repudiandae.</p>
                    </div>
                </div>
                <div class="col-nav">
                    <div class="navigation">
                        <h2>Navigation</h2>

                        <ul>
                            <li>
                                <?php wp_nav_menu(); ?>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sosmed">
                    <div class="social-media">
                        <h2>Social Media</h2>

                        <div class="sosmed-link">
                            <ul>
                                <?php
                                
                                $sosmed = get_posts([
                                    'post_type' => 'social-media'
                                ]);

                                 ?>
                                 <?php foreach($sosmed as $data){ ?>
                                <li><a href="<?php echo $data->post_title; ?>">
                                <div class="sosmed-logo">
                                    <?php echo $data->post_content; ?>
                                </div>
                                </a>
                                </li>
                                <?php }; ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="copyright">
            Copyright   &copy; <?php echo esc_html( date_i18n( __( 'Y', 'blankslate' ) ) ); ?> - All rights reserved.
        </div>
    </footer>
<?php wp_footer(); ?>
 
</body>
</html>