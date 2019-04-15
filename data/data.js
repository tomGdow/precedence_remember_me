'use strict';

let data = ` 

  £(1)  Comma/Sequence 

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
       |
       ,                                         (L-to-R)
  
  £(2)  yield yield*    

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
         |
  [2]    yield                                   (R-to-L)
  [2]    yield*                                  (R-to-L)
 
  £(3)  assignment     

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
           |
  [3]      =      (assignment)                   (R-to-L)
  [3]      +=     (addition assignment)          (R-to-L)
  [3]      -=     (subtraction assignment)       (R-to-L) 
  [3]      **=    (exponentiation assignment     (R-to-L)
  [3]      *=     (left shift assignment)        (R-to-L)
  [3]      /=     (division assignment)          (R-to-L)
  [3]      %=     (remainder assignment)         (R-to-L)
  [3]      <<=    (left shift assignment)        (R-to-L)
  [3]      >>=    (right shift assignment)       (R-to-L)
  [3]      >>>=   (unsigned right shift)         (R-to-L)
  [3]      &=     (bitwise AND assignment)       (R-to-L)
  [3]      ^=     (bitwise XOR assignment)       (R-to-L)
  [3]      |=     (bitwise OR assignment)        (R-to-L)
 
  
  £(4)  conditional (ternary operator)  

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
             |
  [4]        (cond) ? (if true) : (if false)     (R-to-L) 
  
  £(5)  Logical OR     

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
               |
  [5]          ||                                (L-to-R)
    
  £(6)  Logical AND     

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                 |
  [6]            &&                              (L-to-R)
    
  £(7)  Bitwise OR    

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                   |
  [7]              |        (Bitwise OR)         (L-to-R)

  £(8)  Bitwise XOR   

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                     |
  [8]                ^      (Bitwise XOR)        (L-to-R)

  £(9)  Bitwise AND 

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                       |
  [9]                  &    (Bitwise AND)        (L-to-R)

 £(10)  Equality, Inequality ...   

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                         |
 [10]  (L-to-R)          ==                    (Equality)            
 [10]  (L-to-R)          !=                  (Inequality)         
 [10]  (L-to-R)          ====           (Strict Equality)     
 [10]  (L-to-R)          !==          (Strict Inequality)  

 £(11)  Less Than ...             

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                            |
 [11]  (L-to-R)             <                 (Less Than)
 [11]  (L-to-R)             <=       (Less Than Or Equal)
 [11]  (L-to-R)             >              (Greater Than)
 [11]  (L-to-R)             >=    (Greater Than or Equal)

 £(12)  Bitwise Left Shift ...          

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                               |
 [12]  (L-to-R)                <<    (Bitwise Shift Left)
 [12]  (L-to-R)                >>   (Bitwise Shift Right)
 [12]  (L-to-R)                >>>  (Bitwise Unsigned 
                                             Right Shift)


 £(13)  Addition Subtraction             

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                                  |
 [13]  (L-to-R)                   +            (Addition)
 [13]  (L-to-R)                   -         (Subtraction)

 £(14)  Multiplication Division Remainder 

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                                     |
 [14]  (L-to-R)                      *   (Multiplication)
 [14]  (L-to-R)                      /         (Division)
 [14]  (L-to-R)                      %        (Remainder)

 £(15)  Exponentiation       

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                                        |
 [15]  (Exponentiation)                 *         (R-to-L)  
 [15]                                                // !!

 £(16)  Logical NOT ...                        

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                                           |
 [16]  (Logical NOT)            (R-to-L)   !        
 [16]  (Bitwise NOT)            (R-to-L)   ~        
 [16]  (Unary Plus)             (R-to-L)   +        
 [16]  (Unary Negation)         (R-to-L)   -        
 [16]  (Prefix Increment)       (R-to-L)   ++ 
 [16]  (Prefix Decrement)       (R-to-L)   --     
 [16]                           (R-to-L)   typeof
 [16]                           (R-to-L)   void 
 [16]                           (R-to-L)   delete
 [16]                           (R-to-L)   await 

 £(17)  Postfix Increment/Decrement           

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                                              |
 [17]  (Postfix Increment)                    ++    (N/A)
 [17]  (Postfix Decrement)                    --    (N/A)

 £(18)  New (without Arg List)          

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                                                 |
 [18]  (R-to-L)                     (no args)    new

 £(19)  Member Access ...            

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                                                    |
 [19]  (Member Access)                (L-to-R)      .  
 [19]  (Computed Member Access)       (L-to-R)      [...] 
 [19]  (New -with arg list)           (N/A)         new  
 [19]  (function call)                (L-to-R)      (...) 

 £(20)  Grouping              

       1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20
                                                       |
 [20]                                          (N/A)   () 


`; 
