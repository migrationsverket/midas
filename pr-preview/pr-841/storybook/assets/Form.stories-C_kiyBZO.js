import{j as n}from"./iframe-CYvJGSmS.js";import{$ as j}from"./Form-C_kiV4Z7.js";import{G}from"./Grid-BRwfNYa9.js";import{G as e}from"./GridItem-CBfYHEcz.js";import{T as r}from"./TextField-D5kJBcUa.js";import{S as I}from"./Select-BZn3DN0v.js";import{B as a}from"./Button-BbYBHHtu.js";import{R as g,a as b}from"./Radio-B1zjnHs3.js";import{C as h}from"./CheckboxGroup-jbc1mYUZ.js";import{C as k}from"./Checkbox-jLiTd-Yk.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CuWAxdzP.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-QFWPenr0.js";import"./useFocusRing-FTbe-l_H.js";import"./index-DXQ02lBx.js";import"./index-D45n5wsY.js";import"./TextFieldBase-DkzoKYRb.js";import"./TextField-BhlxWwwA.js";import"./FieldError-j3nvWI2f.js";import"./Text-yj0MqBpC.js";import"./Text-CdZ8Vz_D.js";import"./context-QFnjSo_z.js";import"./SelectionManager-wCE--O93.js";import"./useEvent-CsvSC4Gc.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-MsEvOe3x.js";import"./useDescription-Cx2mZSeI.js";import"./useControlledState-DiLnGB4z.js";import"./Group-fqwJKym7.js";import"./Input-B_PNnNC9.js";import"./Hidden-AGpPWuyb.js";import"./Button-jGSKpEK5.js";import"./useLabels-Bjotf5pP.js";import"./useButton-CycCzzfg.js";import"./useTextField-BR7v7irn.js";import"./useField-BPRGfX_v.js";import"./TextField.module-DjUItNl5.js";import"./Label-BtKfMM7R.js";import"./Dialog-CvyxsV1y.js";import"./RSPContexts-DnhEUVwB.js";import"./OverlayArrow-Cye9Nxte.js";import"./useResizeObserver-NUXxspi2.js";import"./Collection-CMI13eT6.js";import"./index-C2wJ9VDx.js";import"./Separator-Adu_s4u0.js";import"./PressResponder-C0sRicU1.js";import"./useLocalizedStringFormatter-D0YvmEjF.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-kdhGM_af.js";import"./useLocalizedStringFormatter-CVkWc7Vr.js";import"./x-BI1qJUp3.js";import"./createLucideIcon-__qkpVwx.js";import"./Heading-HLGJFsLb.js";import"./info-DhiLKv_n.js";import"./Popover-B3JKzDSz.js";import"./Tag-DqBUxQLp.js";import"./ListBox-CVw1MmwZ.js";import"./DragAndDrop-CRM7uQ2s.js";import"./inertValue-DoQDQEjH.js";import"./useListState-DVyyyygw.js";import"./useHighlightSelectionDescription-Cz2JhU1S.js";import"./useUpdateEffect-DDP4JM50.js";import"./useHasTabbableChild-BH_5oCoT.js";import"./check-CBz9SY7H.js";import"./ListBoxSection-CQp_fnaF.js";import"./Virtualizer-Da7W9Yg0.js";import"./useObserveElement-CWpfXwoN.js";import"./chevron-down-Cf5WNvrJ.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DTk7tBBN.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
