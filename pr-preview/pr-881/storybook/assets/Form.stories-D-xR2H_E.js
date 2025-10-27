import{j as n}from"./iframe-DQeG1L7j.js";import{$ as j}from"./Form-DISgZUva.js";import{G}from"./Grid-BMV6DqSu.js";import{G as e}from"./GridItem-Bx5B-AP0.js";import{T as r}from"./TextField-Q04vJYBy.js";import{S as I}from"./Select-iysAuxlZ.js";import{B as a}from"./Button-PjNs6Wec.js";import{R as g,a as b}from"./Radio-5KzqpZHG.js";import{C as h}from"./CheckboxGroup-CRSYYgB9.js";import{C as k}from"./Checkbox-DIKKm1qu.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B2QlKTd1.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-XXwuBmrn.js";import"./useFocusRing-PqEGmFE5.js";import"./index-DaxeWZVM.js";import"./index-BnaeFB6-.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-AowcQQDw.js";import"./FieldError-CqDiYO1y.js";import"./Text-BIDKVX1T.js";import"./Text-Dk9jmPe4.js";import"./RSPContexts-B7hVWhIM.js";import"./Group-CUPpdP2F.js";import"./Input-Dm0VdSTW.js";import"./Hidden-DTciBjOt.js";import"./Button-CKseS_yJ.js";import"./useLabels-BEjjJ7Q5.js";import"./useButton-CXG7KoTH.js";import"./useTextField-Gc123cNC.js";import"./useControlledState-DfLx6uzq.js";import"./useField-s8A3ZWFp.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CsWOIwQ_.js";import"./Dialog-UgTUSNRZ.js";import"./OverlayArrow-B305jjL3.js";import"./useResizeObserver-J_Jt8QYX.js";import"./Collection-C-pJ5t9i.js";import"./index-DN8s9QiM.js";import"./Separator-DBn0y7ro.js";import"./SelectionManager-Hv8aK9gK.js";import"./useEvent-CpZkRW6Z.js";import"./scrollIntoView-Cm0BGxtF.js";import"./SelectionIndicator-DKaZauoY.js";import"./useDescription-jaEN_hHp.js";import"./ListKeyboardDelegate-LGbifDw-.js";import"./PressResponder-BwmV_qEq.js";import"./useLocalizedStringFormatter-DsEpldrj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-o3GQ4_wx.js";import"./VisuallyHidden-CckphA-N.js";import"./useLocalizedStringFormatter-DrchA9Xs.js";import"./x-DdKnjjl0.js";import"./createLucideIcon-7HBvDr3d.js";import"./Heading-txMAMGsH.js";import"./info-DdtxWQ6b.js";import"./Popover-BbOUfefz.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CNHvQstg.js";import"./DragAndDrop-Cyc-3dtX.js";import"./inertValue-lFu0Iw40.js";import"./useListState-c0gfBwXa.js";import"./Tag-DGc8tcRo.js";import"./useHighlightSelectionDescription-DJIy01uP.js";import"./useUpdateEffect-CAXoWWLB.js";import"./useHasTabbableChild-5eH1SbCl.js";import"./chevron-down-Dhd6irmD.js";import"./ListBox-BGI-jaK4.js";import"./Virtualizer-5kGk7cu3.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CKO2oO89.js";const Pn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const $n=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,$n as __namedExportsOrder,Pn as default};
