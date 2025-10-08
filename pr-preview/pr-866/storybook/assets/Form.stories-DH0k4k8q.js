import{j as n}from"./iframe-iI286SVS.js";import{$ as j}from"./Form-B6qzr_A4.js";import{G}from"./Grid-BRchcpN0.js";import{G as e}from"./GridItem-B8ShzR1P.js";import{T as r}from"./TextField-BY2GQKDx.js";import{S as I}from"./Select-BlsmYZ3Z.js";import{B as a}from"./Button-Yzx6zM4f.js";import{R as g,a as b}from"./Radio-C7S40O2j.js";import{C as h}from"./CheckboxGroup-BaBAT4Mo.js";import{C as k}from"./Checkbox-Bt99R_70.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DIsj5guN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DRITjk9p.js";import"./useFocusRing-CkY4oXrl.js";import"./index-DVtWQV78.js";import"./index-DLZJ2YyP.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-29PKRKnD.js";import"./TextField-SHjRruPd.js";import"./FieldError-DJZ6W_k0.js";import"./Text-CpPkDz3R.js";import"./Text-BPjIoSUQ.js";import"./context-CFK84kdI.js";import"./SelectionManager-0GDUgfMo.js";import"./useEvent-CPhgnCZI.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C3axoWmL.js";import"./useDescription-CruCsUf0.js";import"./useControlledState-CIN4NgC8.js";import"./Group-Du5N2w-o.js";import"./Input-9s2hSILP.js";import"./Hidden-BhNkmRDV.js";import"./Button-DS9zfnHk.js";import"./useLabels-BnotL2G0.js";import"./useButton-qynQARJy.js";import"./useTextField-pZxVE7Cf.js";import"./useField-DDii3a21.js";import"./TextField.module-DjUItNl5.js";import"./Label-BN_z8lxU.js";import"./Dialog-D3QTLEAl.js";import"./RSPContexts-D8u7DIla.js";import"./OverlayArrow-C2-fPm_h.js";import"./useResizeObserver-CioXC-Zy.js";import"./Collection-LICogLuh.js";import"./index-B_72AA5c.js";import"./Separator-BS4OAzbF.js";import"./PressResponder-D0crpJbs.js";import"./useLocalizedStringFormatter-Cw_H2mI3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-ACJiZq0O.js";import"./useLocalizedStringFormatter-CHmZAzvd.js";import"./x-0UFksOnX.js";import"./createLucideIcon-C-eLmYiC.js";import"./Heading-Bw_9Nz4N.js";import"./info-CkCYlvCS.js";import"./Popover-vfSmzBaL.js";import"./Tag-4V5WoIPf.js";import"./ListBox-qI_RWjBK.js";import"./DragAndDrop-uz0Jn2-l.js";import"./inertValue-SZNT_KW-.js";import"./useListState-DYELO2BA.js";import"./useHighlightSelectionDescription-BhfvXMUi.js";import"./useUpdateEffect-CbX1lTPU.js";import"./useHasTabbableChild-BSuk-6pk.js";import"./check-CrXsPPD-.js";import"./ListBoxSection-COzRNU-2.js";import"./Virtualizer-Cw8-y6lz.js";import"./useObserveElement-CzF7iEB6.js";import"./chevron-down-jQl8oSEV.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState--HlOuQ7N.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
