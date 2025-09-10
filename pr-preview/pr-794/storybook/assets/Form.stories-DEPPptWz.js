import{j as n}from"./iframe-BGRj5jui.js";import{$ as j}from"./Form-D0KHYkPw.js";import{G}from"./Grid-Dm54c7Lr.js";import{G as e}from"./GridItem-BblYjG37.js";import{T as r}from"./TextField-BM96upIM.js";import{S as I}from"./Select-DOh1KPSL.js";import{B as a}from"./Button-BZx88TdH.js";import{R as g,a as b}from"./Radio-CTKETFcm.js";import{C as h}from"./CheckboxGroup-BiD2OJUm.js";import{C as k}from"./Checkbox-Crpdm5h5.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-jQqyXbP1.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-KoZ2XD6u.js";import"./useFocusRing-iy0Y3yYt.js";import"./index-BuN8I1MC.js";import"./index-a0A5RBhO.js";import"./TextFieldBase-BS9yVKzH.js";import"./TextField-yPX5nOly.js";import"./FieldError-B2L-1vwr.js";import"./Text-CVvnQfNU.js";import"./Text-CEyPA3AS.js";import"./ListKeyboardDelegate-DBhxONsp.js";import"./SelectionManager-Bh87KW-y.js";import"./useEvent-JzhQ5xyU.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BCEnnxn5.js";import"./useDescription-DUV7sgLE.js";import"./useControlledState-xKkhWiaw.js";import"./Group-DluwTtE_.js";import"./Input-BGkiQ69Z.js";import"./Hidden-Bjf-3MOG.js";import"./Button-C8fcYfhr.js";import"./useLabels-BydcNipU.js";import"./useButton-ahfIUT-F.js";import"./useTextField-B0HZMcZl.js";import"./useField-COZlmZ_W.js";import"./TextField.module-8oYDuXgF.js";import"./Label-Dq3_VHq1.js";import"./Dialog-BUVn3J-c.js";import"./RSPContexts-B0TSPUtT.js";import"./OverlayArrow-CSdepT2L.js";import"./useResizeObserver-uBit2cgR.js";import"./Collection-_sPfzeFB.js";import"./index-C3dEnVQp.js";import"./Separator-D52gebS3.js";import"./PressResponder-BHXoKx1R.js";import"./useLocalizedStringFormatter-CWz066uY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CdjlljSB.js";import"./Dialog-BDNK36Hi.js";import"./useLocalizedStringFormatter-CSGFXQfl.js";import"./x-C0Qt6l3p.js";import"./createLucideIcon-BuVmJUgQ.js";import"./Heading-CUlzHo4R.js";import"./info-D-9LaZRc.js";import"./Tag-BxA0pcAa.js";import"./ListBox-BPr6dtsG.js";import"./DragAndDrop-PlhuPdh4.js";import"./inertValue-DFgrGcHP.js";import"./useListState-D80CKR-x.js";import"./useHighlightSelectionDescription-D5Zl3P6g.js";import"./useUpdateEffect-Dg4x2-5k.js";import"./useHasTabbableChild-ChCkKd7J.js";import"./check-CU1e0aaR.js";import"./ListBoxSection-Q3ivyuNw.js";import"./Virtualizer-C_wExglC.js";import"./useObserveElement-C8y1XzJP.js";import"./chevron-down-BMOslSje.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-CiZSiHRd.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
