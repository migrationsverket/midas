import{j as n}from"./iframe-B-VhlC4E.js";import{$ as j}from"./Form-ZVC58mcE.js";import{G}from"./Grid-wfU4EJXc.js";import{G as e}from"./GridItem-sH8Kcfsy.js";import{T as r}from"./TextField-C6eLkIa-.js";import{S as I}from"./Select-CVhj8Rtk.js";import{B as a}from"./Button-BgKCKHrV.js";import{R as g,a as b}from"./Radio-B2lp14BL.js";import{C as h}from"./CheckboxGroup-YQH5XMhu.js";import{C as k}from"./Checkbox-H6jPuDPx.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B3D9x6An.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DjFRB2Xj.js";import"./useFocusRing-CvwnBZ9o.js";import"./index-zntG3D7N.js";import"./index-B0qaojvl.js";import"./TextFieldBase-BGDpKhXo.js";import"./TextField-DgsmTeSb.js";import"./FieldError-A9PQG9ZS.js";import"./Text-Bj9tMDq1.js";import"./Text-DmS3GJlJ.js";import"./context-BGYYMRbn.js";import"./SelectionManager-D9auh32f.js";import"./useEvent-D5nlRFHX.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BZZNHPZd.js";import"./useDescription-DZSAVxhZ.js";import"./useControlledState-D53pXGvl.js";import"./Group-BycBY_yl.js";import"./Input-CJUyuRdf.js";import"./Hidden-T5PV3lZw.js";import"./Button-7Kwrzoh4.js";import"./useLabels-DAEXVISf.js";import"./useButton-ELAYFu-y.js";import"./useTextField-Cc2NmwXs.js";import"./useField-DBdfeJrb.js";import"./TextField.module-DjUItNl5.js";import"./Label-8-BOGD40.js";import"./Dialog-BlStq27g.js";import"./RSPContexts-Bs4sqW_B.js";import"./OverlayArrow-CSNCb062.js";import"./useResizeObserver-CygvDIRc.js";import"./Collection-DQ1wGurC.js";import"./index-BcHtcvFp.js";import"./Separator-BPOIzd8v.js";import"./PressResponder-C5LKR8nY.js";import"./useLocalizedStringFormatter-D0dsj4wW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C8obk0SA.js";import"./useLocalizedStringFormatter-Ctq1jzij.js";import"./x-DZXRjAza.js";import"./createLucideIcon-B0FRJMKx.js";import"./Heading-CZ889oqY.js";import"./info-DoUg9b1A.js";import"./Popover-DyYh1HQY.js";import"./Tag-uTyoSVIJ.js";import"./ListBox-Cc_SxDY0.js";import"./DragAndDrop-CD7qm5LT.js";import"./inertValue-CKuxGf9X.js";import"./useListState-cYWe1cAk.js";import"./useHighlightSelectionDescription-DUq07uh0.js";import"./useUpdateEffect-DMNlCLjT.js";import"./useHasTabbableChild-Cp5p9TUD.js";import"./check-l1Jndr8o.js";import"./ListBoxSection-CoMTgScR.js";import"./Virtualizer-UHoz8jMW.js";import"./useObserveElement-BSOpCxzw.js";import"./chevron-down-BCRggpPT.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DMa_XNJ-.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
