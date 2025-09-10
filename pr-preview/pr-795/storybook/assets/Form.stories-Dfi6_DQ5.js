import{j as n}from"./iframe-DEKOUU8k.js";import{$ as j}from"./Form-ClKAEoG3.js";import{G}from"./Grid-BiS7kMnn.js";import{G as e}from"./GridItem-aEiz30qn.js";import{T as r}from"./TextField-CrayCat-.js";import{S as I}from"./Select-FP1QIYTS.js";import{B as a}from"./Button-BHeuYd2y.js";import{R as g,a as b}from"./Radio-BhZn3EwT.js";import{C as h}from"./CheckboxGroup-DIBJJOsq.js";import{C as k}from"./Checkbox-D45IemFL.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BksSIjfn.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-A2kM0SDP.js";import"./useFocusRing-BjMf-8m2.js";import"./index-Ca1SZadx.js";import"./index-BKqI4NdY.js";import"./TextFieldBase-JgeNw2XW.js";import"./TextField-D3D-lewy.js";import"./FieldError-K29xCmjW.js";import"./Text-Wmoj8ver.js";import"./Text-L3avYp0Y.js";import"./ListKeyboardDelegate-D9euLFy5.js";import"./SelectionManager-CW90qV2Q.js";import"./useEvent-BV35s3Iy.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DK9Ej_Dh.js";import"./useDescription-B06oh3XJ.js";import"./useControlledState-DGrUdstW.js";import"./Group-DAyTrpBn.js";import"./Input-D1u-4SPV.js";import"./Hidden-b14-4qzn.js";import"./Button-DroBRk8h.js";import"./useLabels-DOBtPN0D.js";import"./useButton-CxUATmRD.js";import"./useTextField-CShldGeh.js";import"./useField-Byt8qrDd.js";import"./TextField.module-8oYDuXgF.js";import"./Label-0rGBbyJV.js";import"./Dialog-CG4xDjjX.js";import"./RSPContexts-B3h9NjY7.js";import"./OverlayArrow-D3nP3_7h.js";import"./useResizeObserver-D1xsfjQn.js";import"./Collection-BVGCucDa.js";import"./index-DPdddLjd.js";import"./Separator-C10Q-49L.js";import"./PressResponder-BJ_iwIzF.js";import"./useLocalizedStringFormatter-BU4ow1fK.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B-4q_rjN.js";import"./Dialog-B5YICt0l.js";import"./useLocalizedStringFormatter-Dbd04Rnd.js";import"./x-BoHFg0h-.js";import"./createLucideIcon-BP4CF5pf.js";import"./Heading-DAG3zTKY.js";import"./info-CUGjKs8A.js";import"./Tag-eNZZ98hz.js";import"./ListBox-BMX2T-_b.js";import"./DragAndDrop-IyPH1pMC.js";import"./inertValue-0NytaxRE.js";import"./useListState-CEeEzZMo.js";import"./useHighlightSelectionDescription-BZ6GIqiq.js";import"./useUpdateEffect-50iKJK4Q.js";import"./useHasTabbableChild-D9Eb5SrC.js";import"./check-JrRuEwFP.js";import"./ListBoxSection-CZnSx-av.js";import"./Virtualizer-DFwSqT4n.js";import"./useObserveElement-Bd_JzvLJ.js";import"./chevron-down-CaTwIwda.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-BXhsfQJV.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
