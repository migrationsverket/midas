import{j as n}from"./iframe-DeK86jJP.js";import{$ as j}from"./Form-BYy2vGOx.js";import{G}from"./Grid-qLwtcybO.js";import{G as e}from"./GridItem-DGKbT2bd.js";import{T as r}from"./TextField-BPchBit9.js";import{S as I}from"./Select-BabXvwjy.js";import{B as a}from"./Button-BVSUBuAC.js";import{R as g,a as b}from"./Radio-BaJG3Ki4.js";import{C as h}from"./CheckboxGroup-v2B9Bb1C.js";import{C as k}from"./Checkbox-Dy-l8N6R.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CLOzdL9v.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Crae6lPy.js";import"./useFocusRing-CwD8Waoq.js";import"./index-CGJBmdi_.js";import"./index-Cik-wDkC.js";import"./TextFieldBase-C-cp_oxp.js";import"./TextField-BXVYQVj4.js";import"./FieldError-Dcd5AgTu.js";import"./Text-BSU2OLG0.js";import"./Text-CJhokECv.js";import"./ListKeyboardDelegate-CzsTmJKz.js";import"./SelectionManager-0K6a301x.js";import"./useEvent-Dabnq9hS.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DL781d3b.js";import"./useDescription-Raf8WUVC.js";import"./useControlledState-Y99N3e1Z.js";import"./Group-D7p53um3.js";import"./Input-DGHSapL9.js";import"./Hidden-k-e6MpDc.js";import"./Button-hIojP0HX.js";import"./useLabels-BbR04L17.js";import"./useButton-BlpdOv7p.js";import"./useTextField-roGdXAtG.js";import"./useField-BzRSelSD.js";import"./TextField.module-DjUItNl5.js";import"./Label-CPYqBob5.js";import"./Dialog-DoxTHBMt.js";import"./RSPContexts-8pzPgVJR.js";import"./OverlayArrow-hqq6BA4l.js";import"./useResizeObserver-DzOQrBRF.js";import"./Collection-D35c4y4W.js";import"./index-D6nNP4ZG.js";import"./Separator-BRiccKOC.js";import"./PressResponder-DXoZb5X8.js";import"./useLocalizedStringFormatter-D3WgUlPf.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DN-VxAyC.js";import"./Dialog-KoJP1zzX.js";import"./useLocalizedStringFormatter-B5IuHI6l.js";import"./x-B366ZlRx.js";import"./createLucideIcon-CMNDIdhZ.js";import"./Heading-vKWnUwkZ.js";import"./info-Bl7kz35k.js";import"./Tag-9DhdyDDW.js";import"./ListBox-HfYtfzFu.js";import"./DragAndDrop-IdtPiXFp.js";import"./inertValue-D1mKID42.js";import"./useListState-DSD174iU.js";import"./useHighlightSelectionDescription-BiiEVuwW.js";import"./useUpdateEffect-D9OM9gei.js";import"./useHasTabbableChild-CVIht1mQ.js";import"./check-Ca6zmIAB.js";import"./ListBoxSection-_HCPwAOe.js";import"./Virtualizer-cTqnH4Oh.js";import"./useObserveElement-cBGIhvtX.js";import"./chevron-down-D2mlk23m.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CeD9m9ss.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
