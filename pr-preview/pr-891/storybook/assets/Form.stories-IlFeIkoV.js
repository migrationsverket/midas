import{j as n}from"./iframe-DSnn27g_.js";import{$ as j}from"./Form-B8OxDnWn.js";import{G}from"./Grid-CuFkiX8s.js";import{G as e}from"./GridItem-CEq8F3Yd.js";import{T as r}from"./TextField-GPQM0QO4.js";import{S as I}from"./Select-DFynCzTP.js";import{B as a}from"./Button-DM8Q6ENn.js";import{R as g,a as b}from"./Radio-DM0Wz02v.js";import{C as h}from"./CheckboxGroup-BK0Svsez.js";import{C as k}from"./Checkbox-BmoxEz8j.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DMRVVt0W.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C4L9LAeU.js";import"./useFocusRing-B0kGOk6b.js";import"./index-DZBSjlS6.js";import"./index-BjdDVgTd.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CmfUXGyd.js";import"./TextField-Baw4yFrO.js";import"./FieldError-DR6MOAC8.js";import"./Text-GLsatxCV.js";import"./Text-RvcCloK4.js";import"./RSPContexts-C9onCh2x.js";import"./Group-D-uhdptX.js";import"./Input-D81ziYUL.js";import"./Hidden-D3uRTTac.js";import"./Button-o7f1f1B_.js";import"./useLabels-Ce0RUtwe.js";import"./useButton-C4obrwMi.js";import"./useTextField-DDg00FNM.js";import"./useControlledState-uxvYb-ts.js";import"./useField-CPqt_KXj.js";import"./TextField.module-8GTEwpm_.js";import"./Label-CEFU5H62.js";import"./Dialog-fUx9UXtV.js";import"./OverlayArrow-BVE-o5kx.js";import"./useResizeObserver-gr4U8P4D.js";import"./Collection-BSGo8TNc.js";import"./index-BG3CRSBQ.js";import"./Separator-yV2blzUM.js";import"./SelectionManager-BHoXafN8.js";import"./useEvent-C0v-h-xd.js";import"./scrollIntoView-Dw_LmK8o.js";import"./SelectionIndicator-BTX2l7Ny.js";import"./useDescription-Bth95dVM.js";import"./ListKeyboardDelegate-C3zexFoS.js";import"./PressResponder-Cc00asK9.js";import"./useLocalizedStringFormatter-mbK1evP8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-5ZVZ4IwV.js";import"./VisuallyHidden-D--nviQF.js";import"./useLocalizedStringFormatter-B35VshaI.js";import"./x-Cs4_OoCJ.js";import"./createLucideIcon-Ctc5foUX.js";import"./Heading-BaqoISbv.js";import"./info-B8Fun2z2.js";import"./Popover-zWQ88JPE.js";import"./Tag-BfqTHRHa.js";import"./ListBox-B231O3n4.js";import"./DragAndDrop-CQUb8Dyw.js";import"./inertValue-BBeACGoY.js";import"./useListState-5eXsu3PJ.js";import"./useHighlightSelectionDescription-IrGTvuUV.js";import"./useUpdateEffect-Bk0tXX1U.js";import"./useHasTabbableChild-Cn9FNR6Q.js";import"./check-CM_r-X_t.js";import"./ListBoxSection-Cn9vqjxk.js";import"./Virtualizer-BOpFM6tr.js";import"./chevron-down-aJOsTwo-.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-fPEUc6mF.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
