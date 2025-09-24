import{j as n}from"./iframe-BVm5Zgww.js";import{$ as j}from"./Form-mDqFXARY.js";import{G}from"./Grid-C1iZn8YQ.js";import{G as e}from"./GridItem-6VidZf6x.js";import{T as r}from"./TextField-BIz8mtzl.js";import{S as I}from"./Select-CZ9HPEZ3.js";import{B as a}from"./Button-DqKhausU.js";import{R as g,a as b}from"./Radio-I5mjrCXy.js";import{C as h}from"./CheckboxGroup-D6v1LDoZ.js";import{C as k}from"./Checkbox-QKUVETB-.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Cye8wXZQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BlA5P6y5.js";import"./useFocusRing-BkFD-WT_.js";import"./index-kjfIl-2V.js";import"./index-DZQARVYQ.js";import"./TextFieldBase-Bds_OzjY.js";import"./TextField-CHG4iKCl.js";import"./FieldError-DaNdEpwI.js";import"./Text-DICXZUMB.js";import"./Text-CxbqumZC.js";import"./ListKeyboardDelegate-IUn2n1jS.js";import"./SelectionManager-DD0DtCGx.js";import"./useEvent-CZDskiWQ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D94Y-rnh.js";import"./useDescription-B0xoPtiO.js";import"./useControlledState-CCTlE_sZ.js";import"./Group-CrimSKl2.js";import"./Input-yAWaxeSt.js";import"./Hidden-Cg_pjexJ.js";import"./Button-B8o3zlbo.js";import"./useLabels-DHXTpHAB.js";import"./useButton-BU97PgDX.js";import"./useTextField-EpceLr8r.js";import"./useField-DWkpQAgY.js";import"./TextField.module-DjUItNl5.js";import"./Label-Dv9luLor.js";import"./Dialog-0S3TPs_8.js";import"./RSPContexts-CrsVtKNz.js";import"./OverlayArrow-CauMazii.js";import"./useResizeObserver-6t_KXMh7.js";import"./Collection-B53wRBGW.js";import"./index-7ziz68pV.js";import"./Separator-fQ0psnzz.js";import"./PressResponder-DAGlJlx7.js";import"./useLocalizedStringFormatter-BeFRrNIe.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-o2004neD.js";import"./Dialog-DLSCelOE.js";import"./useLocalizedStringFormatter-hrvoDEdY.js";import"./x-CkHCN122.js";import"./createLucideIcon-DewsBgYq.js";import"./Heading-BCs7PxCw.js";import"./info-Brg-8kaT.js";import"./Tag-C3FPbzfe.js";import"./ListBox-CKQPgtFS.js";import"./DragAndDrop-CoiwY8As.js";import"./inertValue-BMqwXlCC.js";import"./useListState-Cw8ZUVrl.js";import"./useHighlightSelectionDescription-D9VdD7d6.js";import"./useUpdateEffect-B5deMEGY.js";import"./useHasTabbableChild-BpBUHHBQ.js";import"./check-D8SY5-wB.js";import"./ListBoxSection-DRF48xN6.js";import"./Virtualizer-CB_lBc8w.js";import"./useObserveElement-Db30re0p.js";import"./chevron-down-pwi5cHRt.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DG_5VLkj.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
