import{j as n}from"./iframe-BZBzl4ao.js";import{$ as j}from"./Form-CuGeKbhy.js";import{G}from"./Grid-6B6fz5pw.js";import{G as e}from"./GridItem-FSg2iXvD.js";import{T as r}from"./TextField-CtcwuTVk.js";import{S as I}from"./Select-C8KsF1R_.js";import{B as a}from"./Button-BNYQrBrE.js";import{R as g,a as b}from"./Radio-C0Ebt14W.js";import{C as h}from"./CheckboxGroup-BLr28izC.js";import{C as k}from"./Checkbox-DMxOiGxJ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CtIGHOgz.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CvPSTd3z.js";import"./useFocusRing-DWOTd3wa.js";import"./index-CCUrmMdA.js";import"./index-BBk27vkF.js";import"./TextFieldBase--4deOcJu.js";import"./TextField-B7c_3brF.js";import"./FieldError-BsVBOqt9.js";import"./Text-CB-dld4r.js";import"./Text-Z64A6ZUE.js";import"./ListKeyboardDelegate-Ducc6_UA.js";import"./SelectionManager-MYky8Dwz.js";import"./useEvent-DSEGrP5q.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-yYHGaExG.js";import"./useDescription-DUDT6wU0.js";import"./useControlledState-ydjRtLvF.js";import"./Group-OLgf19eY.js";import"./Input-B3t9IqK7.js";import"./Hidden-DHgUScE4.js";import"./Button-C4KlRz7s.js";import"./useLabels-rFCL4OQX.js";import"./useButton-hBPMyuYD.js";import"./useTextField-BAqXhlk9.js";import"./useField-DpGD0KiG.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-DYleUiHy.js";import"./Dialog-pNGgep6N.js";import"./RSPContexts-D1hfBdYK.js";import"./OverlayArrow-CM7PiCrL.js";import"./useResizeObserver-e6qfPWgN.js";import"./Collection-CJCUnt4-.js";import"./index-CMbCgAF-.js";import"./Separator-DH9TzXKi.js";import"./PressResponder-oAxBmbZE.js";import"./useLocalizedStringFormatter-B4ScjxXM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BY4Y3rrW.js";import"./Dialog-CcGAk_6P.js";import"./useLocalizedStringFormatter-DrEjXAZR.js";import"./x-D58Hudhd.js";import"./createLucideIcon-CFHLFn9V.js";import"./Heading-hnF6Fr-w.js";import"./info-t1z7TmVp.js";import"./Tag-ClYfiJ8h.js";import"./ListBox-DaebaGZa.js";import"./DragAndDrop-BKwze7Pn.js";import"./inertValue-j6EvgEEL.js";import"./useListState-B7fyvvsc.js";import"./useHighlightSelectionDescription-BMhIhlUW.js";import"./useUpdateEffect-Lt4K7iU4.js";import"./useHasTabbableChild-ifPEX7d5.js";import"./check-VSLVOlw2.js";import"./ListBoxSection-DJOFJ6nm.js";import"./Virtualizer-CStndShL.js";import"./useObserveElement-BzGUBSPE.js";import"./chevron-down-D20jiNdj.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-BimFqo7A.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
