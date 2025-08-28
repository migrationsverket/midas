import{j as n}from"./iframe-dflwVQj0.js";import{$ as j}from"./Form-DXtMSxIn.js";import{G}from"./Grid-DSrMCplu.js";import{G as e}from"./GridItem-Dylch83J.js";import{T as r}from"./TextField-B2_WQj-X.js";import{S as I}from"./Select-HJZRe7JG.js";import{B as a}from"./Button-yQqQnt2P.js";import{R as g,a as b}from"./Radio-DKqULzU6.js";import{C as h}from"./CheckboxGroup-BkG2Ddzi.js";import{C as k}from"./Checkbox-BvsfiU4s.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D2xLghoe.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cy89_RzK.js";import"./useFocusRing-HtxIgFNi.js";import"./index-Bfut8mpi.js";import"./index-CCW8wJf9.js";import"./TextFieldBase-BqQoMtXl.js";import"./TextField-BePrYqWe.js";import"./FieldError-BEbqOAxJ.js";import"./Text-M-3GLQok.js";import"./Text-CGySpxCU.js";import"./Input-BqSEWobS.js";import"./Hidden-Bgbt5e-x.js";import"./Button-OnM31pp4.js";import"./useLabels-_O_l3D-4.js";import"./useButton-7jVyTze4.js";import"./useTextField-DAeP0v6d.js";import"./useControlledState-C3u3uV6K.js";import"./useField-D7w-wtiX.js";import"./TextField.module-C33Y04O9.js";import"./Label-aG3WQVx8.js";import"./Dialog-B1cB_IPZ.js";import"./RSPContexts-66zUneKs.js";import"./OverlayArrow-tXR7neqU.js";import"./useResizeObserver-0x0644AP.js";import"./Collection-9piau7XR.js";import"./index-IvJ_bBvX.js";import"./Separator-BX-fF_Lq.js";import"./SelectionManager-UZPvH6eY.js";import"./useEvent-ClhNZjxU.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-nialgbX5.js";import"./useDescription-BYEFn_B-.js";import"./ListKeyboardDelegate-DnkA8ajC.js";import"./PressResponder-BcKvKsJn.js";import"./useLocalizedStringFormatter-zTz9wKxs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CTpbaFYv.js";import"./Dialog-g_i29eud.js";import"./useLocalizedStringFormatter-C9HRoBVS.js";import"./x-BPeNLZbW.js";import"./createLucideIcon-BnM8_3Zb.js";import"./Heading-D0-MW2Jg.js";import"./info-BGm25edL.js";import"./Tag-BN2XlmK2.js";import"./ListBox-ss1ycCz0.js";import"./DragAndDrop-CbcUpg5D.js";import"./inertValue-BpTP0qlF.js";import"./useListState-BfBYaT4m.js";import"./useHighlightSelectionDescription-Oeh1l5s4.js";import"./useUpdateEffect-CM_BGah_.js";import"./useHasTabbableChild-CR2SHsg_.js";import"./check-DTuH6W3e.js";import"./ListBoxSection-FLIXOHHW.js";import"./Virtualizer-PaLREyBs.js";import"./useObserveElement-BQulEUXU.js";import"./chevron-down-CwepelQg.js";import"./Button.module-DKVuWS4g.js";import"./Group-MVPfwMyC.js";import"./useToggleState-CXKQxTv0.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
