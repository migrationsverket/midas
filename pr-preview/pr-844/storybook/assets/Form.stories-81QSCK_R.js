import{j as n}from"./iframe-Cpwkumau.js";import{$ as j}from"./Form-DmUnOhOh.js";import{G}from"./Grid-B1R3ySvJ.js";import{G as e}from"./GridItem-BgRvfyvr.js";import{T as r}from"./TextField-Bg3_BnWl.js";import{S as I}from"./Select-2qJdWXt3.js";import{B as a}from"./Button-CE2_43S9.js";import{R as g,a as b}from"./Radio-XuqD-zMV.js";import{C as h}from"./CheckboxGroup-rTF94Qba.js";import{C as k}from"./Checkbox-gkmWod62.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DfgdEjxQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CHSUFlur.js";import"./useFocusRing-YjGssfTG.js";import"./index-ILE7Avvq.js";import"./index-TqA6xpMC.js";import"./TextFieldBase-C6ITFbNz.js";import"./TextField-DTkHnc2_.js";import"./FieldError-BU9lYOqT.js";import"./Text-DeYF9RGV.js";import"./Text-J1vKJAfS.js";import"./context-DgEiyG3Q.js";import"./SelectionManager-B2BVjUuX.js";import"./useEvent-CQv1OMFj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Dn5sM8Ml.js";import"./useDescription-BRq1ACY4.js";import"./useControlledState-NLjVUBzn.js";import"./Group-COUCVh2t.js";import"./Input-DKyYGnFx.js";import"./Hidden-DRHj-S32.js";import"./Button-CkyiEfJf.js";import"./useLabels-B2EWiIbe.js";import"./useButton-DHQaZTl-.js";import"./useTextField-Ci8ksCip.js";import"./useField-DLFc6mXH.js";import"./TextField.module-DjUItNl5.js";import"./Label-BHPpw0nB.js";import"./Dialog-CX_9Juk3.js";import"./RSPContexts-CsNZ6bBb.js";import"./OverlayArrow-qb41WcSV.js";import"./useResizeObserver-zVBTlCFl.js";import"./Collection-BGq0VmjG.js";import"./index-CWmYE9F4.js";import"./Separator-CLX7s_f5.js";import"./PressResponder-BcTpDn0y.js";import"./useLocalizedStringFormatter-arbMHoXv.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Dwkl2OYO.js";import"./useLocalizedStringFormatter-Bjkdhs8Z.js";import"./x-Cgw_uJM8.js";import"./createLucideIcon-DCJPz7OW.js";import"./Heading-5oeVcfz5.js";import"./info-DQ4_enfs.js";import"./Popover-BZ9dt6er.js";import"./Tag-BUs2wzdD.js";import"./ListBox-3bpEOFAH.js";import"./DragAndDrop-Bl0Cf-Dg.js";import"./inertValue-Clg2WzQ-.js";import"./useListState-DnI43_YU.js";import"./useHighlightSelectionDescription-C0Uicjau.js";import"./useUpdateEffect-DWCB93HZ.js";import"./useHasTabbableChild-_VP76nai.js";import"./check-D1atlvq3.js";import"./ListBoxSection-BDPlyBRT.js";import"./Virtualizer-CGE95Dop.js";import"./useObserveElement-DxI5-PG8.js";import"./chevron-down-DIystTIr.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-ClgiT-Se.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
