<?php
    class Test3 extends Route{
        public function request()
        {
            if ($this->is('test3')){
                return $this->result('test3');
                //return $this->error('exception in php');
            }
        }
    }
?>