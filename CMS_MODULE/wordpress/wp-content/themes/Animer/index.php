<?php 
    get_header();
?>
    <div class="container">

        <div class="grid">
    
            <div class="breadcrumd">
                
                <div class="slideshow-container">
        
                 <?php foreach($posts as $post): ?>
                
                    <div class="mySlides fade">
                        <?php the_post_thumbnail(); ?>
                    </div> 

                <?php endforeach; ?>
    
                    <a class="prev" onclick="plusSlides(-1)">❮</a>
                    <a class="next" onclick="plusSlides(1)">❯</a>
    
                </div>
    
            </div>
    
            <!-- anime -->
            <div class="anime">
                 <h4>Anime</h4>
                 <?php foreach($posts as $post): ?>
                    <div class="grid">
                        <div class="thumbnail">
                            <a href="<?php echo $post->guid; ?>">
                                <?php the_post_thumbnail(); ?>
                            </a>
                        </div>
                        <div class="title">
                            <a href="<?php echo $post->guid; ?>">
                                <?php echo $post->post_title; ?>
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
    
        </div>
    

    </div>    


    <div class="container">
        <div class="cards">

            <div class="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam aliquam voluptatem voluptate saepe non molestias eaque ullam, facilis expedita architecto, perspiciatis voluptatibus commodi earum deleniti nam ea pariatur repudiandae voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor esse natus tempore nobis distinctio accusamus pariatur ad corporis quibusdam recusandae quas, error aperiam ratione repellendus et blanditiis similique iste ipsam?  </p>
            </div>
        </div>
    </div>


<?php 

    get_footer();

?>