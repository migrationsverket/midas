import{j as n}from"./iframe-B_y6g-9r.js";import{$ as j}from"./Form-DW9FtLqY.js";import{G}from"./Grid-CZa6i9h1.js";import{G as e}from"./GridItem-DAXYMT22.js";import{T as r}from"./TextField-BXW2dTAH.js";import{S as I}from"./Select-CI0iuG6F.js";import{B as a}from"./Button-x1br7nEK.js";import{R as g,a as b}from"./Radio-MxpaaSfC.js";import{C as h}from"./CheckboxGroup-DIEmTIlL.js";import{C as k}from"./Checkbox-C10pzUj5.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BRAOF98I.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-8dvt5-rz.js";import"./useFocusRing-BR4dpyki.js";import"./index-D86mRU9q.js";import"./index-LkFueUcS.js";import"./TextFieldBase-CibJJpHk.js";import"./TextField-BVncTZTT.js";import"./FieldError-BE6-tmBt.js";import"./Text-Bn_Y5EXC.js";import"./Text-DjxH2Ciy.js";import"./ListKeyboardDelegate-CLBxZLAr.js";import"./SelectionManager-CaU6wkaH.js";import"./useEvent-DnFuQpkV.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-fWZfAOj6.js";import"./useDescription-BogqO1TM.js";import"./useControlledState-T2gGbpfx.js";import"./Group-BbVN9fCn.js";import"./Input-CkNHiOgV.js";import"./Hidden-C1--NwGl.js";import"./Button-CV_Mq9t_.js";import"./useLabels-Q0N14n5s.js";import"./useButton-Ce8mNIMT.js";import"./useTextField-0WU9gQsD.js";import"./useField-CpwAIn4v.js";import"./TextField.module-BrIGiDQC.js";import"./Label-BrIp0RSj.js";import"./Dialog-InuYabVk.js";import"./RSPContexts-Bunt6uYY.js";import"./OverlayArrow-BeFb1Ppx.js";import"./useResizeObserver-Bbinneke.js";import"./Collection-BXNiaxOj.js";import"./index-D-Y5eEdz.js";import"./Separator-BVjRFhBN.js";import"./PressResponder-C87Tlule.js";import"./useLocalizedStringFormatter-PKcBR076.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BwFwP60_.js";import"./Dialog-Dl3iM_Kw.js";import"./useLocalizedStringFormatter-Du7irMwJ.js";import"./x-BmkzTjno.js";import"./createLucideIcon-Cn2-1bOx.js";import"./Heading-Kb0laDWZ.js";import"./info-LWGuQFc0.js";import"./Tag-fNOG8NMw.js";import"./ListBox-BC5Pyj44.js";import"./DragAndDrop-Vvf-GLGy.js";import"./inertValue-Bsgcv7WD.js";import"./useListState-BE7aEcL9.js";import"./useHighlightSelectionDescription-DW0iZtY5.js";import"./useUpdateEffect-BNTgjhQv.js";import"./useHasTabbableChild-BfyeoaiF.js";import"./check-BmNZOAvy.js";import"./ListBoxSection-CdaUkGHL.js";import"./Virtualizer-KAkPiA-t.js";import"./useObserveElement-B8IZE99K.js";import"./chevron-down-BlJM6a8i.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-DNIo6U06.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
