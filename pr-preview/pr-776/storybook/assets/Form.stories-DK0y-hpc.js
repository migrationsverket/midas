import{j as n}from"./iframe-Cjinl3KY.js";import{$ as j}from"./Form-DzZMoPf3.js";import{G}from"./Grid-QMrNo37q.js";import{G as e}from"./GridItem-Df45MYy8.js";import{T as r}from"./TextField-ftgOaT3c.js";import{S as I}from"./Select-BXS-TJoF.js";import{B as a}from"./Button-Bk2dWWNW.js";import{R as g,a as b}from"./Radio-DlF14FO5.js";import{C as h}from"./CheckboxGroup-CuQIF8r7.js";import{C as k}from"./Checkbox-BnjQ5Yha.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Df6g5th9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CMTljGH-.js";import"./useFocusRing-BDYIEaxW.js";import"./index-m9hpbgeH.js";import"./index-CLkfaRef.js";import"./TextFieldBase-D1poQ9HD.js";import"./TextField-CdGqLZdg.js";import"./FieldError-DWZ5zJAB.js";import"./Text-CvqKJyo0.js";import"./Text-Bnl1cZcj.js";import"./ListKeyboardDelegate-C8yTPB0Y.js";import"./SelectionManager--kiOrq-L.js";import"./useEvent-BEZ6m5jX.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DAJZAsxN.js";import"./useDescription-Axda9Z09.js";import"./useControlledState-B8FrTbp7.js";import"./Group-CsF3VPyx.js";import"./Input-CY0RfRtS.js";import"./Hidden-BYr6X160.js";import"./Button-BzO5uQlz.js";import"./useLabels-Bq5P0zwF.js";import"./useButton-CYeiUsIx.js";import"./useTextField-BhFN5VwZ.js";import"./useField-C_6HJxyE.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-DFJZaunF.js";import"./Dialog-CF8SzecF.js";import"./RSPContexts-16ssM0eS.js";import"./OverlayArrow-BwEk-8ty.js";import"./useResizeObserver-CnQrBhap.js";import"./Collection-C1xbPv27.js";import"./index--qVMC9Mz.js";import"./Separator-CUDRGmi5.js";import"./PressResponder-BVp2GiNX.js";import"./useLocalizedStringFormatter-DqC1TwZG.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-u2OIcDNz.js";import"./Dialog-Cwh4qECJ.js";import"./useLocalizedStringFormatter-CG5L7Mme.js";import"./x-CcSnAaFn.js";import"./createLucideIcon-DRoLvpIq.js";import"./Heading-DclZmlF6.js";import"./info-Bb_zPpsQ.js";import"./Tag-BipXp8aX.js";import"./ListBox-h4h1sc4v.js";import"./DragAndDrop-4TK5fC3D.js";import"./inertValue-D1q590WQ.js";import"./useListState-CbBBkYHK.js";import"./useHighlightSelectionDescription-BjgO85Ba.js";import"./useUpdateEffect-DH7O7AlD.js";import"./useHasTabbableChild-BJnybFLf.js";import"./check-CYNXlXny.js";import"./ListBoxSection-C1mvAFKv.js";import"./Virtualizer-BJGmq7if.js";import"./useObserveElement-keFHx0Td.js";import"./chevron-down-W9VPBSgz.js";import"./Button.module-DWkXlqFG.js";import"./useToggleState-DDoQ7bFM.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
