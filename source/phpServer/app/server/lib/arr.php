<?php

class ARR {
    public static function is_assoc($array){
        
        return count(array_filter(array_keys($array), 'is_string')) > 0;
    }
    
    public static function extend($a = array(), $b = array()){
        
        if ((is_array($a)) && (is_array($b))) {
            $res = array();
            if (is_assoc($a)) {
                foreach ($a as $k => $v) {
                    if (!isset($b[$k])) {
                        $res[$k] = $v;
                    } else {
                        if ((is_array($v)) && (is_array($b[$k]))) {
                            $res[$k] = extend($v, $b[$k]);
                        } else {
                            $res[$k] = $b[$k];
                        }
    
                    }
                }
            }
            return $res;
        };
        return $a;
    }
    

}


?>