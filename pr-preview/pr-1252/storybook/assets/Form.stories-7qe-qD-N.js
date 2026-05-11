import{j as e}from"./iframe-DmMjYjLV.js";import{c}from"./Form-w1xpkiob.js";import{G as d}from"./Grid-B3gZ_h5j.js";import{G as i}from"./GridItem-D6or7Y81.js";import{a as x,R as u}from"./Radio-B6XVE-Xh.js";import{C as I}from"./CheckboxGroup-g7TyAELG.js";import{C as G}from"./Checkbox-DsqhFfOW.js";import{T as t}from"./TextField-DO6I6FPo.js";import{S as l}from"./Select-D5ch7Tmj.js";import{L as p}from"./ListBoxItem-CEriUuFx.js";import{B as a}from"./Button-Pdwae4O6.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DNsXJifB.js";import"./utils-C7Za6cav.js";import"./clsx-B-dksMZM.js";import"./index-MWmo0bvh.js";import"./index-Dtm98ubu.js";import"./clsx-Ciqy0D92.js";import"./Group-DApTybdo.js";import"./FieldError-Dhwy9R14.js";import"./Text-TBh7QsjQ.js";import"./Text-D1BlasEz.js";import"./Button-BoGHaXxS.js";import"./Hidden-C30O7ZZj.js";import"./useLabel-w1IJLBOX.js";import"./useLabels-KrUCHD9B.js";import"./useButton-Dmer3eRj.js";import"./SelectionIndicator-CspuSccB.js";import"./useField-ykwfEeQx.js";import"./VisuallyHidden-Bt6CiHI_.js";import"./useControlledState-jKmX6mW8.js";import"./Label-Cg8j5ntE.js";import"./Dialog-QxxpEwfY.js";import"./RSPContexts-CYlpwwtX.js";import"./OverlayArrow-FoDXdwa0.js";import"./useResizeObserver-QqaVn9XQ.js";import"./Collection-CQwAL6eH.js";import"./index-B_ond3mD.js";import"./Separator-ByeE83bT.js";import"./SelectionManager-CQ6A48ag.js";import"./useEvent-be-eSwO4.js";import"./scrollIntoView-BJKhh-O-.js";import"./useDescription-2aTt99IB.js";import"./ListKeyboardDelegate-Cgn_BUdj.js";import"./PressResponder-CgluTvIq.js";import"./useLocalizedStringFormatter-Df1Z6d6Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2C9iwtv.js";import"./getScrollParent-iMMNoEOU.js";import"./ModalOverlay-sNrptj1Y.js";import"./x--G2PLC8C.js";import"./createLucideIcon-mwlEDpcM.js";import"./useLocalizedStringFormatter-Cacp7Pde.js";import"./Heading-CQ85-u0X.js";import"./info-Dpc101tS.js";import"./Popover-DEDjHU40.js";import"./check-Cdg67bgk.js";import"./useToggleState-CBBhVQ_U.js";import"./TextFieldBase-Du3R42XC.js";import"./Input-DJHO9EVR.js";import"./useTextField-CEggPbeQ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CLsksYm9.js";import"./DragAndDrop-dG8KulVe.js";import"./inertValue-sT6DQ-MH.js";import"./useListState-DCYtOCbf.js";import"./TagGroup-BZd1UOqo.js";import"./useHighlightSelectionDescription-DSvBCQW6.js";import"./useUpdateEffect-8Fq709L1.js";import"./useHasTabbableChild-Ce2yZaJC.js";import"./chevron-down-DuZawqAy.js";import"./Virtualizer-DquN9tXm.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
