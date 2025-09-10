import{j as n}from"./iframe-B1PXMFJH.js";import{$ as j}from"./Form-BpnzzbmM.js";import{G}from"./Grid-Bxz_5774.js";import{G as e}from"./GridItem-DYR_NhK0.js";import{T as r}from"./TextField-j_uuIvv2.js";import{S as I}from"./Select-Di6AYHTw.js";import{B as a}from"./Button-r_ZHzQTp.js";import{R as g,a as b}from"./Radio-BiCHzgbE.js";import{C as h}from"./CheckboxGroup-BMuTuRiN.js";import{C as k}from"./Checkbox-DRH_3Vvg.js";import"./preload-helper-Dp1pzeXC.js";import"./utils--cdDOgQ9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DoNNVLA0.js";import"./useFocusRing-CaCwQhqQ.js";import"./index-DflHDfD6.js";import"./index-DviUo7BM.js";import"./TextFieldBase-B-xowklr.js";import"./TextField-CpFxRMfX.js";import"./FieldError-B3neSLgM.js";import"./Text-CDSSvww9.js";import"./Text-B8FY4BAK.js";import"./ListKeyboardDelegate-DW4cgVrX.js";import"./SelectionManager-9RjfiAQJ.js";import"./useEvent-BSxq3C9f.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DJ7oL-6y.js";import"./useDescription-DXwkPHaD.js";import"./useControlledState-CxQdtbRy.js";import"./Group-CapYMe5U.js";import"./Input-75Nv0D4f.js";import"./Hidden-pXJnpdQE.js";import"./Button-Bp6PsTmG.js";import"./useLabels-C-5XlMpq.js";import"./useButton-DRBU-csS.js";import"./useTextField-Bgr6JouS.js";import"./useField-4HGMjqOy.js";import"./TextField.module-8oYDuXgF.js";import"./Label-eMge9unh.js";import"./Dialog-iLc77v9r.js";import"./RSPContexts-CIcYIjA4.js";import"./OverlayArrow-BGmm6pwz.js";import"./useResizeObserver-Db00BjTW.js";import"./Collection-CcS6tW_X.js";import"./index-CLj2SmbT.js";import"./Separator-BaPp2OIQ.js";import"./PressResponder-DZlAswnw.js";import"./useLocalizedStringFormatter-NpoBiwjz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Bl0M9lle.js";import"./Dialog-DkLQvxTI.js";import"./useLocalizedStringFormatter-D2NpKfOg.js";import"./x-OLRObqUj.js";import"./createLucideIcon-D2sxI8sW.js";import"./Heading-Ckw_8ki5.js";import"./info-D6Jzg7nV.js";import"./Tag-DReVBHAX.js";import"./ListBox-vETnluTo.js";import"./DragAndDrop-Dv6ri7zr.js";import"./inertValue-CAA4yFWW.js";import"./useListState-DeBbiNsy.js";import"./useHighlightSelectionDescription-BBZ3rC-n.js";import"./useUpdateEffect-B2CTkbF_.js";import"./useHasTabbableChild-n4ftKuFs.js";import"./check-DPtU46ej.js";import"./ListBoxSection-DfhNq_YA.js";import"./Virtualizer-CTKRXw5L.js";import"./useObserveElement-CyKrlSnF.js";import"./chevron-down-6GrPsNZo.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-Euf9Y3ss.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
