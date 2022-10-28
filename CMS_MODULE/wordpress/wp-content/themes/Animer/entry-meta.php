<div class="entry-meta">
<span class="author vcard"<?php if ( is_single() ) { echo ' itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">'; } else { echo '><span>'; } ?><?php the_author_posts_link(); ?></span></span>
<span class="meta-sep"> | </span>
<span class="entry-category"><?= the_category();  ?></span>
</div>