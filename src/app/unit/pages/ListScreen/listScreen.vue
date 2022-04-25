<template>
    <div class="main-controller">
        <h5 class="header-text">لیست گواهینامه های ارسالی توسط مدرسان</h5>
        <Accordion :multiple="true" >
            <AccordionTab header="گواهینامه محمد محمدی">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
            <AccordionTab header="گواهینامه محمد محمدی">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </AccordionTab>
            <AccordionTab header="گواهینامه محمد محمدی">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </AccordionTab>
        </Accordion>
    </div>    
</template>
<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
export default {
    components : {Accordion , AccordionTab},
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
.main-controller {
    padding: 20px 25px;
    .header-text{
        font-size: 12px;
        margin-bottom: 8px;
    }
}

::v-deep(.p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon) {
    position: relative;
    right: 90%;
    transform: rotate(180deg);
    color: rgba(107, 114, 128, 1);
    font-size: 12px;
}

::v-deep(.p-accordion-header-text) {
    color: rgba(107, 114, 128, 1);
    font-size: 12px;
}

::v-deep(.p-accordion-header-link) {
    background: #ffff !important;
}
</style>