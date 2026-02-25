import{j as e}from"./iframe-0ay5Cl7Z.js";import{$ as c}from"./Form-U_9riSua.js";import{G as d}from"./Grid-C7Fqjf1o.js";import{G as i}from"./GridItem-5AvJpbOa.js";import{a as x,R as u}from"./Radio-BCL9WDsS.js";import{C as I}from"./CheckboxGroup-DvPhI26L.js";import{C as G}from"./Checkbox-mtyNjXBn.js";import{T as t}from"./TextField-Dohqj4uN.js";import{S as l}from"./Select-BAyJWH0f.js";import{L as p}from"./ListBoxItem-D71jGPaj.js";import{B as a}from"./Button-C9_6wCAg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-OwhIF6Yv.js";import"./useObjectRef-DG4zbPWe.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cy5tbrL6.js";import"./useFocusRing-BCxb_ufh.js";import"./useFocusable-B634M_Fb.js";import"./index-9qv7Fem8.js";import"./index-U-aVmNqW.js";import"./clsx-Ciqy0D92.js";import"./Group-BpsT-UME.js";import"./FieldError-BsAQJ2uy.js";import"./Text-DfthMNVx.js";import"./Text-BGuljUD0.js";import"./Button-DxAruj7U.js";import"./Hidden-BzPJJaE1.js";import"./number-DfkVkf0F.js";import"./useLabels-BQsB-eC9.js";import"./useButton-Dk5PjSpe.js";import"./SelectionIndicator-zqXirjR8.js";import"./useField-DyriZxff.js";import"./VisuallyHidden-DQAFa958.js";import"./useControlledState-BZfBuZ3A.js";import"./Label-BEvqZhj3.js";import"./Dialog-CsrRoGz5.js";import"./RSPContexts-CAeNAO0k.js";import"./OverlayArrow-EcjdagTC.js";import"./useResizeObserver-DERZdo11.js";import"./Collection-DvvkxIOw.js";import"./CollectionBuilder-BTJH7Kto.js";import"./index-Dfbi8MRN.js";import"./Separator-hQ70M9LX.js";import"./SelectionManager-Cp7KGgYq.js";import"./useEvent-5vUs9lWK.js";import"./scrollIntoView-DBszQ3_a.js";import"./useDescription-f161JRhm.js";import"./ListKeyboardDelegate-vxkeYpMQ.js";import"./PressResponder-4fh9PZSY.js";import"./useLocalizedStringFormatter-Bev7EFEw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-MDYFQ4gP.js";import"./getScrollParent-Bg5c39wC.js";import"./x-CV-T8NX-.js";import"./createLucideIcon-C-V0PVLC.js";import"./useLocalizedStringFormatter-CA3dvWhn.js";import"./Heading-CLuq4JDV.js";import"./info-BX7F8BJn.js";import"./Popover-MJVDCkTa.js";import"./check-DsBPdSOr.js";import"./useToggleState-DqjR02Kj.js";import"./TextFieldBase-D2mNoQBB.js";import"./Input-CGiKSPDo.js";import"./useTextField-BqqX8DDI.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-KGKIfZE4.js";import"./DragAndDrop-BvzIZV0-.js";import"./inertValue-CBzdp4Ld.js";import"./useListState-Daa8A8vD.js";import"./TagGroup-D9Dks4fM.js";import"./useHighlightSelectionDescription-SQL0JOil.js";import"./useUpdateEffect-q6vMMHpi.js";import"./useHasTabbableChild-D2wY-Diz.js";import"./chevron-down-tWK39nCb.js";import"./Virtualizer-DQ_uCNU3.js";import"./Button.module-D_C6WeTN.js";const Oe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Pe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Pe as __namedExportsOrder,Oe as default};
