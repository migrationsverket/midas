import{j as n}from"./iframe-_OT4KaI3.js";import{$ as j}from"./Form-DD30Dk0_.js";import{G}from"./Grid-BiajO5hZ.js";import{G as e}from"./GridItem-DfTo4lKA.js";import{T as r}from"./TextField-C8TIv0uR.js";import{S as I}from"./Select-s0oIjQAI.js";import{B as a}from"./Button-BBjRPA7i.js";import{R as g,a as b}from"./Radio-CQUY8h4N.js";import{C as h}from"./CheckboxGroup-threu9ZO.js";import{C as k}from"./Checkbox-B9wTt_2d.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CRnS4sEm.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DkRrHMl_.js";import"./useFocusRing-C9ouN9VH.js";import"./index-N3tHRCnm.js";import"./index-CddxC3U_.js";import"./TextFieldBase-USelBazs.js";import"./TextField-BhE303eV.js";import"./FieldError-Bzd2xFui.js";import"./Text-BD4Qpgqv.js";import"./Text-D9Xck2Jo.js";import"./ListKeyboardDelegate-6T73FyFl.js";import"./SelectionManager-bYs6akNc.js";import"./useEvent-BkdJR17e.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Pjlcznur.js";import"./useDescription-DvUJI00A.js";import"./useControlledState-DqPezhcQ.js";import"./Group-DCiEpVBr.js";import"./Input-DNprKPDq.js";import"./Hidden-DuEE4Uvo.js";import"./Button-QrMMQLkQ.js";import"./useLabels-BStYjRiu.js";import"./useButton-DfiHMCVc.js";import"./useTextField-XsYFV0AW.js";import"./useField-Dj7jAjru.js";import"./TextField.module-DjUItNl5.js";import"./Label-DFFtK2aM.js";import"./Dialog-CysWDb6-.js";import"./RSPContexts-_h5pkA5a.js";import"./OverlayArrow-CCtVdH3-.js";import"./useResizeObserver-BQJH_R4t.js";import"./Collection-C-YrwPhu.js";import"./index-B6V28LYZ.js";import"./Separator-DX1C9JqO.js";import"./PressResponder-DTa2p-Mx.js";import"./useLocalizedStringFormatter-D-yGIXd3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BVRf8H1w.js";import"./Dialog-6aPu0Nly.js";import"./useLocalizedStringFormatter-DimEAyFj.js";import"./x-DpjBlqy7.js";import"./createLucideIcon-BjJKNTqz.js";import"./Heading-BxEcpKWF.js";import"./info-PhtV_a1n.js";import"./Tag-BszuuTdp.js";import"./ListBox-MyuXvaRN.js";import"./DragAndDrop-3kSxPMAX.js";import"./inertValue-DGUbc_D8.js";import"./useListState-qJzZs28R.js";import"./useHighlightSelectionDescription-C2GFKKjn.js";import"./useUpdateEffect-3SALDBX1.js";import"./useHasTabbableChild-BmZ5M1dt.js";import"./check-CBJm2KRZ.js";import"./ListBoxSection-B1vGb8ae.js";import"./Virtualizer-B-IanG6c.js";import"./useObserveElement-tWmNfmte.js";import"./chevron-down-HV79NOPv.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CENVTeK7.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
