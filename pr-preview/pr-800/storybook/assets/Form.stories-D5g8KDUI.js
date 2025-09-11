import{j as n}from"./iframe-Cl2pk5eA.js";import{$ as j}from"./Form-BKVOEsjW.js";import{G}from"./Grid-gJmQ2fiL.js";import{G as e}from"./GridItem-Vbza5Rbj.js";import{T as r}from"./TextField-CbIxt-EJ.js";import{S as I}from"./Select-CY_ldAIU.js";import{B as a}from"./Button-Bc9xA1-z.js";import{R as g,a as b}from"./Radio-B8UBgMcC.js";import{C as h}from"./CheckboxGroup-q570wfH7.js";import{C as k}from"./Checkbox-fhUxIoSa.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DSnK5n9n.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D4GtvXS7.js";import"./useFocusRing-Bu7fyF7e.js";import"./index-CMMiBDmM.js";import"./index-CB9Diq5Y.js";import"./TextFieldBase-9m57v_ge.js";import"./TextField-VrtWdnGG.js";import"./FieldError-DhTnBV6P.js";import"./Text-Cv0RVaMq.js";import"./Text-PitE7apn.js";import"./ListKeyboardDelegate-CSVDRvPU.js";import"./SelectionManager-CQhq6nOl.js";import"./useEvent-D72yuvix.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BZIPaowT.js";import"./useDescription-BO6h_zzI.js";import"./useControlledState-DkJ7lcuC.js";import"./Group-aFJG4B0e.js";import"./Input-BByicTeq.js";import"./Hidden-hSvQMuw9.js";import"./Button-CYmTG0as.js";import"./useLabels-C-hQY7HM.js";import"./useButton-guBOAJpJ.js";import"./useTextField-1mXO3MBv.js";import"./useField-B9s5reYB.js";import"./TextField.module-DjUItNl5.js";import"./Label-DOg0C4Si.js";import"./Dialog-BuePzBNq.js";import"./RSPContexts-D9NXypQq.js";import"./OverlayArrow-C1V_UqL4.js";import"./useResizeObserver-TdSe0V3o.js";import"./Collection-DGJCBMn0.js";import"./index-Dz4zwwjD.js";import"./Separator-DMXKbqSM.js";import"./PressResponder-BsPtN2od.js";import"./useLocalizedStringFormatter-CFNetQdS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DYTuWx1P.js";import"./Dialog-qcbmmcbK.js";import"./useLocalizedStringFormatter-tc3MKI5J.js";import"./x-CM59Pg1b.js";import"./createLucideIcon-C3Lh5HGK.js";import"./Heading-B7YEoOQf.js";import"./info-Cx6Vpnax.js";import"./Tag-5kZSNbSj.js";import"./ListBox-Bf5LSH6_.js";import"./DragAndDrop-B4E2-n6M.js";import"./inertValue-Bl8nYzZl.js";import"./useListState-C0IjQKdM.js";import"./useHighlightSelectionDescription-CEpPduC9.js";import"./useUpdateEffect-dstiRZC2.js";import"./useHasTabbableChild-DU6uxrNd.js";import"./check--JurSkjI.js";import"./ListBoxSection-XBc1np6F.js";import"./Virtualizer-B8NK5CHc.js";import"./useObserveElement-MtmadH7j.js";import"./chevron-down-kcz6CRDt.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Pas_RWC4.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
