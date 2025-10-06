import{j as n}from"./iframe-C9wj9Yuq.js";import{$ as j}from"./Form-D4EFhvqB.js";import{G}from"./Grid-k8YxG9oO.js";import{G as e}from"./GridItem-BN2PBLeP.js";import{T as r}from"./TextField-S7lML2B8.js";import{S as I}from"./Select-DDqQn5Ab.js";import{B as a}from"./Button-D5osK_gy.js";import{R as g,a as b}from"./Radio-1HJMTa2K.js";import{C as h}from"./CheckboxGroup-ClHX6EK5.js";import{C as k}from"./Checkbox-C77vvgHo.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DPU2exi4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BxlYXZTS.js";import"./useFocusRing-DrrUfgfk.js";import"./index-CMyzvkgD.js";import"./index-BSgmhg_b.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DM7VsX2j.js";import"./TextField-YtK0smcd.js";import"./FieldError-p1oE0K25.js";import"./Text-S0VTzck5.js";import"./Text-CYPfoesm.js";import"./context-DADpvuAZ.js";import"./SelectionManager-C9N8F2Lc.js";import"./useEvent-CTlyYnNE.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CIcTcowB.js";import"./useDescription-C6UzzpjS.js";import"./useControlledState-BulyiYsl.js";import"./Group-BBkHl5lc.js";import"./Input-UVkYBRvP.js";import"./Hidden-C5FQ65cX.js";import"./Button-iNazgIWI.js";import"./useLabels-CKsy4CxE.js";import"./useButton-DRJPO0Fn.js";import"./useTextField-Ex9lg8Nf.js";import"./useField-rFPwm0R6.js";import"./TextField.module-DjUItNl5.js";import"./Label-qMhuUmTc.js";import"./Dialog-DiEsUsiQ.js";import"./RSPContexts-Ben7j_lm.js";import"./OverlayArrow-CLZ_WzON.js";import"./useResizeObserver-CS3kRtB9.js";import"./Collection-DrBhLm_D.js";import"./index-kDMs2lFp.js";import"./Separator-BBdvWuvK.js";import"./PressResponder-PPPg9hRi.js";import"./useLocalizedStringFormatter-CTcwzQCA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BzkEZ4gr.js";import"./useLocalizedStringFormatter-C0BYweRf.js";import"./x-CVuTved_.js";import"./createLucideIcon-cJDp0qou.js";import"./Heading-BTgF-Oiw.js";import"./info-CntZMxox.js";import"./Popover-Die5lEPa.js";import"./Tag-UjxAf_sl.js";import"./ListBox-HiXlqcWG.js";import"./DragAndDrop-DgdRFDjM.js";import"./inertValue-B2q0MEuY.js";import"./useListState-CnNreIOQ.js";import"./useHighlightSelectionDescription-vpnAk6Oo.js";import"./useUpdateEffect-BcLCJRtr.js";import"./useHasTabbableChild-CBSYfKb5.js";import"./check-_SC3XIub.js";import"./ListBoxSection-CT3PfDJy.js";import"./Virtualizer-B8SoqUNw.js";import"./useObserveElement-Bj0xQlvd.js";import"./chevron-down-DTrZFSrh.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DgPwvaaF.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Nn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Nn as __namedExportsOrder,wn as default};
