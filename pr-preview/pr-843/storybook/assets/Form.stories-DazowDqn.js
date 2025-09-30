import{j as n}from"./iframe-C0tOSD1a.js";import{$ as j}from"./Form-yeVTbqgu.js";import{G}from"./Grid-C9MZFlyB.js";import{G as e}from"./GridItem-CEeN3HId.js";import{T as r}from"./TextField-sudKQZXZ.js";import{S as I}from"./Select-CZA3FPUj.js";import{B as a}from"./Button-TjKbJAkY.js";import{R as g,a as b}from"./Radio-Ca4jI0m1.js";import{C as h}from"./CheckboxGroup-CfBmxTpc.js";import{C as k}from"./Checkbox-BzDupBC3.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DJUhr1n5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-FhP8Iz-4.js";import"./useFocusRing-BS29XNuU.js";import"./index-BOf4_xG2.js";import"./index-BMMHLl8R.js";import"./TextFieldBase-DPDSMdMf.js";import"./TextField-DXG_9_E6.js";import"./FieldError-DjyPf-xP.js";import"./Text-BSwSgnjW.js";import"./Text-wj-qKHnC.js";import"./context-DxC49x0T.js";import"./SelectionManager-CS6vYcD_.js";import"./useEvent-BIYW3h9-.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-xXWwr3ma.js";import"./useDescription-DzGS8VM9.js";import"./useControlledState-CTqWG5Kh.js";import"./Group-CGJBPs85.js";import"./Input-37qIt8jF.js";import"./Hidden-DlxM41Zh.js";import"./Button-CK4QuKkB.js";import"./useLabels-B4vrJkzM.js";import"./useButton-DsTgBn2N.js";import"./useTextField-BxpKXPUU.js";import"./useField-CyhyzzhV.js";import"./TextField.module-DjUItNl5.js";import"./Label-k8wdA7YH.js";import"./Dialog-DkJqOlQc.js";import"./RSPContexts-BE1YwBeH.js";import"./OverlayArrow-BdAskM9i.js";import"./useResizeObserver-BXDNaeiJ.js";import"./Collection-DsfdrfCN.js";import"./index-BWbtzUDl.js";import"./Separator-DDNTQ6y0.js";import"./PressResponder-CKayunl0.js";import"./useLocalizedStringFormatter-DjXWcVKH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Cxm8O0Qy.js";import"./useLocalizedStringFormatter-ChhYh1rm.js";import"./x-BO3KekYN.js";import"./createLucideIcon-Bd5MLWfb.js";import"./Heading-ChHLfsM-.js";import"./info-DRbN71VW.js";import"./Popover-B-jJBWS9.js";import"./Tag-JTHWvOnx.js";import"./ListBox-7LzIEPtX.js";import"./DragAndDrop-CtJpm2-t.js";import"./inertValue-CFIW5od7.js";import"./useListState-O41Zja1h.js";import"./useHighlightSelectionDescription-C6DJN9b-.js";import"./useUpdateEffect-BXfc5DiD.js";import"./useHasTabbableChild-B4Wy-rFT.js";import"./check-BiOzXu-a.js";import"./ListBoxSection-B-4b62WH.js";import"./Virtualizer-CQ5Ns_hn.js";import"./useObserveElement-CycSbCzr.js";import"./chevron-down-B6szpH_8.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BwZhCGBa.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
