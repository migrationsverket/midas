import{j as n}from"./iframe-Cg9bsw0p.js";import{$ as j}from"./Form-DIiVY4Ak.js";import{G}from"./Grid-BORQ6_a4.js";import{G as e}from"./GridItem-nuH4IXh3.js";import{T as r}from"./TextField-B2RVh015.js";import{S as I}from"./Select-CoYU0itE.js";import{B as a}from"./Button-COeQT7LJ.js";import{R as g,a as b}from"./Radio-DguyppQu.js";import{C as h}from"./CheckboxGroup-TGjJFB_-.js";import{C as k}from"./Checkbox-CugiiBwn.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BDmz9ss0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DHIc0tH8.js";import"./useFocusRing-kF5CxaXi.js";import"./index-DAAfdeRC.js";import"./index-Cs4yWL8O.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-T3zXLmcs.js";import"./TextField-JWQ8YHru.js";import"./FieldError-DiSLnhxS.js";import"./Text-MSMQ0onS.js";import"./Text-DJ8aMmha.js";import"./context-CGeub-CQ.js";import"./SelectionManager-DoBfWb4c.js";import"./useEvent-CgpxcrA_.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-zBz3U1rl.js";import"./useDescription-DI-g8NQy.js";import"./useControlledState-BpsuIfnv.js";import"./Group-DlLup7LA.js";import"./Input-DfA1_EdJ.js";import"./Hidden-BqiN8Imq.js";import"./Button-0rg2-bJH.js";import"./useLabels-63_LE9SZ.js";import"./useButton-DTh9iGdC.js";import"./useTextField-BecI8wrc.js";import"./useField-DRvaNt6S.js";import"./TextField.module-DjUItNl5.js";import"./Label-CQzDPPFY.js";import"./Dialog-DBA90N7p.js";import"./RSPContexts-DcEi24la.js";import"./OverlayArrow-DDgJgHlo.js";import"./useResizeObserver-BdSntIqu.js";import"./Collection-DDZW8RfR.js";import"./index-Cil5p5iN.js";import"./Separator-CYyjx_IY.js";import"./PressResponder-BoJ7LAec.js";import"./useLocalizedStringFormatter-BM43qOcR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Bbuxh2i9.js";import"./x-CttU90I7.js";import"./createLucideIcon-Br1vyvNC.js";import"./useLocalizedStringFormatter-9YzW9Y9N.js";import"./Heading-CREk18-7.js";import"./info-DLOlu75X.js";import"./Popover-Z0Y2thAw.js";import"./Tag-AAOhJes7.js";import"./ListBox-C02d2XzI.js";import"./DragAndDrop-BjFJ_W23.js";import"./inertValue-Co3VG_xM.js";import"./useListState-BaNxw9KH.js";import"./useHighlightSelectionDescription-CdVuHWhx.js";import"./useUpdateEffect-BT3fZg9u.js";import"./useHasTabbableChild-LI0LzPmz.js";import"./check-BSDdDctF.js";import"./ListBoxSection-DDKiHEeY.js";import"./Virtualizer-CpFVyNmR.js";import"./useObserveElement-DbkdZVYl.js";import"./chevron-down-CfSFQI1T.js";import"./Button.module-BF_N0uYf.js";import"./useToggleState-Clv2Zkwf.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
