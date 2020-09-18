<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Added Quotes Progress Count</h3>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="10" :style="{width : updateProgress}">
                {{quoteCount}} / {{maxQuoteCount}}
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
 props : ['quoteCount', 'maxQuoteCount'],
 computed : {
     updateProgress (){
         var width = ((this.quoteCount / this.maxQuoteCount) * 100 + '%');
         return width;
     }
 }   
}
</script>  