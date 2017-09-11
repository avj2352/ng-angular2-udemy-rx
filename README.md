# Typescript Udemy

## Table of Contents

- [Defining Maps](#defining-maps)

# Type Inference

The following code will not compile in Typescript

```js
let obj = {}; // The type inferred here is {}
obj.name = 'Pramod';
```
---
> KEY CONCEPT 1: Type Inference is _always on_
---

Type -> `Any` & Compiler property `noImplicitAny`

The same above code can be re-written with a `custom object type` definition

```js
let myObj:{name:String} = {name:'Pramod'}; //NOTE in Typescript, we can assign even the datatype as a custom object
```

Again, the same above code can be re-written as follows using an `Interface` keyword.

```js
interface CustomType{
    name:String
}

let myObj:CustomType = {name:'Pramod'};
```

Notice the use of the `interface` keyword for defining a `CustomType object datatype`.

---
> KEY CONCEPT 2: In Typescript the `interface` keyword is not just an object oriented concept, it has been generalized `to include objects also` !!
---

---
> KEY CONCEPT 3: Types are defined by the `collection of their properties`.
---

_`It means that what defines a type is not so much its name (like nominal type systems that are common in other languages like Java, C#). Instead, what defines a type is a collection of specific properties and their types.`_

---
> KEY CONCEPt 4: Type `Compatibility` depends on the list of properties of a type.
---

```js
interface Course {
    name:String;
}

interface Book {
    name:String;
    pages:numer;
}

let myBook:Book = {name:'TypeScript', pages:2};
let myCourse:Course = {name:'TypeScript'};

myCourse = myBook; //This will compile, cause myCourse has a ppty similar in myBook

myBook = myCourse; // this will not compile, cause my myCourse is missing a property pages  

```

# How to fix TypeCompatibility / Compilation Error

By using the `any` keyword. This will now compile

```js
let user:any = {};
user.name = 'Pramod'; //This will compile
```
_So annotating a variable with type Any is essentially telling the compiler to bypass the type system, and in general not check type compatibility for this variable._

Another way of fixing `Type compatibility` on properties of any object is by using the `optional` keyword `?`

```js
interface Course {
    name:String;
}

interface Book {
    name:String;
    pages?:numer;
}

let myBook:Book = {name:'TypeScript', pages:2};
let myCourse:Course = {name:'TypeScript'};

myCourse = myBook; //This will compile, cause myCourse has a ppty similar in myBook

myBook = myCourse; // this will also compile now, cause Book interface has an optional property.
```

# The Biggest Advantages of using Typescript

So as we can see at this point, although the Typescript Type System looks very familiar to developers coming from other languages at first, its actually designed in a fundamentally different way.

Everything is based on type inference as much as possible, although there are places like function arguments where we need to add type annotation if setting noImplicityAny to true, because there is no way for the compiler to infer those types.

This does not happen very often, and when it happens it can be fixed using the Any type. It's better to try to use Any the least possible, to keep all the benefits of the type system intact


> The biggest exception for this will be function parameters, where there is _`no way for the compiler to infer what is the type of a function parameter`_. But it's a great idea to mention the types of our function parameters for documentation purposes.

```js
{
    "compilerOptions": {
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    }
}
```
- `noImplicitAny` : This way, if by some reason the compiler can't infer the type of a variable, `it will not implicitly assign it the type any`. This is probably one of the most important properties available to configure the compiler.

```js
import axios from 'axios';
import {AxiosPromise} from 'axios';

interface Lesson {
    id:number;
    description:string;
}//end:interface-Lesson

function getLesson(lessonId:number):AxiosPromise{
    return axios.get(`lesson/${lessonId}`);
}//end:getLesson

const promise = getLesson(1);

promise.then(response=>{
    const lesson:Lesson = response.data;
},errorResponse=>{
    console.log('The Error response is : ', errorResponse);
});
```

# Two ways of importing Type Definitions in Typescript

1. Using the `@types/node` command in the command prompt
2. Using the `compiler opt-in` (the lib flag) in the typescript type definition.


# What if no type definition is available

If no type definition files are available for a given library, that will not prevent us from using it. With `Typescript 2.1`, we can import the library directly and anything imported will be assigned the type Any.

# Conclusion

## The following are the important take aways of using Typescript.

- it's a structural subtyping system and not a nominal subtyping system, meaning that type compatibility is achieved by comparing lists of properties and not type names

- there are multiple types of Type Definitions (@types, built-in compiler types and package types), and it's essential to know when to use each and why

# Defining Maps

Javascript, unlike Java and other nominal programming languages, doesnt have built in Maps. the following is how you define a Map in typescript.

```ts
export interface ThreadInterface {
    id:number;
    messageIdList: number[];
    pariticipantList:{[key:number]:number}; //This is how typescript Map is defined
}//end:interface-ThreadInterface
```
---

# RxJS Store

- If we need to update the memory, we are going to call an `action`. 
- The store responds to the `action`, and change the internal state of the `store`.
- It does this using a function called `reducers`. It always produces a new state.

## Creating a RXJS http response and then funciton

In `RxJS` you call a `http` response as follows

> `thread.service.ts`
```ts
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'; // for mapping response
import {AllUserData} from '../../../shared/dao/all-user-data';
import {Http} from '@angular/http';

@Injectable()
export class ThreadsService {

  constructor(private http:Http) { 

  }//end:constructor

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get('/api/threads')
      .map(res => res.json());
  }//end:loadUserThreads

}//end:ThreadsService

```
You then handle the call back similar to http's `.then` function, but in `RxJS` you use the `.subscribe` function

>thread-selection.component.ts
```ts
import { Component, OnInit } from '@angular/core';
import { ThreadsService } from "app/services/threads.service";

@Component({
  selector: 'thread-selection-component',
  templateUrl: './thread-selection.component.html',
  styleUrls: ['./thread-selection.component.sass']
})
export class ThreadSelectionComponent implements OnInit {

  constructor(private threadService:ThreadsService) { 

  }//end:constructor

  ngOnInit() {
    //Call the REST API - subscribe is similar to .then()
    this.threadService.loadUserThreads()
    .subscribe(res => {
      console.log(res);
    });
    ; //loads all the threads associated to a given user
  }//end:ngOnInit

}
```