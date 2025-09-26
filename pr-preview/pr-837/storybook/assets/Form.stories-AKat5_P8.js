import{j as n}from"./iframe-BHl1JtJs.js";import{$ as j}from"./Form-jVg6dzT8.js";import{G}from"./Grid-CRjOgcTB.js";import{G as e}from"./GridItem-L_q55GPt.js";import{T as r}from"./TextField-Bht_gUO_.js";import{S as I}from"./Select-CJtPfnng.js";import{B as a}from"./Button-D6eObyYY.js";import{R as g,a as b}from"./Radio-C3vaXp-7.js";import{C as h}from"./CheckboxGroup-D8ekHFe9.js";import{C as k}from"./Checkbox-BR-ixiop.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DsRGMVF5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B7F8CFhx.js";import"./useFocusRing-CKk5uDyr.js";import"./index-BfG_emwB.js";import"./index-CqjoK46o.js";import"./TextFieldBase-CvsWi2HE.js";import"./TextField-CwQlRslw.js";import"./FieldError-BZ_nveJs.js";import"./Text-Dx8zeE-R.js";import"./Text-iYt9aB_9.js";import"./ListKeyboardDelegate-BAFfI5lE.js";import"./SelectionManager-OG5A8_mX.js";import"./useEvent-2zzA4ibG.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-dpXJH94O.js";import"./useDescription-DNNJvbej.js";import"./useControlledState-Bmxq7ZeY.js";import"./Group-1_J1mS52.js";import"./Input-RxPL-aEj.js";import"./Hidden-rbuBrzm1.js";import"./Button-C8qm-91Q.js";import"./useLabels-ytCe5vDH.js";import"./useButton-CEuw5Rdg.js";import"./useTextField-CRiQXN2M.js";import"./useField-ByHI-rTL.js";import"./TextField.module-DjUItNl5.js";import"./Label-DNhMGYjL.js";import"./Dialog-NrkI_fUt.js";import"./RSPContexts-CsPVKNDq.js";import"./OverlayArrow-CneIf-d0.js";import"./useResizeObserver-42ibKep5.js";import"./Collection-Cg87ENgH.js";import"./index-4mFNSPMQ.js";import"./Separator-DZP0qeNk.js";import"./PressResponder-8Qdfh_W6.js";import"./useLocalizedStringFormatter-DhrYgH69.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-P95tZzr3.js";import"./Dialog-DvQVEJ6-.js";import"./useLocalizedStringFormatter-BPqzf-d7.js";import"./x-CCvJ7j2e.js";import"./createLucideIcon-BXhmWI8x.js";import"./Heading-BWvaNV5l.js";import"./info-Dlv8FZsi.js";import"./Tag-CTWfuAoc.js";import"./ListBox-DhkLoc0S.js";import"./DragAndDrop-DZ3c4pv3.js";import"./inertValue-vJWad7-i.js";import"./useListState-COkLz90H.js";import"./useHighlightSelectionDescription-C8KioH3m.js";import"./useUpdateEffect-BkkWJNuF.js";import"./useHasTabbableChild-gLwmVRla.js";import"./check-mTXBjilJ.js";import"./ListBoxSection-Ci7G81XL.js";import"./Virtualizer-BEJItWSl.js";import"./useObserveElement-COT2T9I0.js";import"./chevron-down-DzcQwelt.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DutGdoa2.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
