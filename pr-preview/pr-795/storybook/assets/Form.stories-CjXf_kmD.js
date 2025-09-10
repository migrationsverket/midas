import{j as n}from"./iframe-Bk2KsNJA.js";import{$ as j}from"./Form-D2CTbUFU.js";import{G}from"./Grid-C3Y5COAe.js";import{G as e}from"./GridItem-B-zapQ2b.js";import{T as r}from"./TextField-XfK5k_y8.js";import{S as I}from"./Select-D_qlC01q.js";import{B as a}from"./Button-D1HA4SSE.js";import{R as g,a as b}from"./Radio-DUvOA772.js";import{C as h}from"./CheckboxGroup-BJCHeOla.js";import{C as k}from"./Checkbox-B2NAhDAx.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-xJsY6GUO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cm3t3WO8.js";import"./useFocusRing-25bChEWZ.js";import"./index-XbiuNMuw.js";import"./index-Crgbuwrk.js";import"./TextFieldBase-C1G4HmGM.js";import"./TextField-UlN6gDfO.js";import"./FieldError-BXHhs7Cx.js";import"./Text-DF9zw4S0.js";import"./Text-N8WVUpat.js";import"./ListKeyboardDelegate-CaFCawBX.js";import"./SelectionManager-DTPdOIV3.js";import"./useEvent-Db5tIthB.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B9VwDmAi.js";import"./useDescription-D5GJhh_f.js";import"./useControlledState-B5b95nhu.js";import"./Group-YEwAByUG.js";import"./Input-ng0HX9Gk.js";import"./Hidden-Cmn59mke.js";import"./Button-CY9IL6lG.js";import"./useLabels-BvS5hw5h.js";import"./useButton-D1CAdWAV.js";import"./useTextField-DUN7uV7m.js";import"./useField-B7UQsy3v.js";import"./TextField.module-8oYDuXgF.js";import"./Label-UZeUCWMr.js";import"./Dialog-D7E5URnQ.js";import"./RSPContexts-CsspwCfl.js";import"./OverlayArrow-B85ocRy-.js";import"./useResizeObserver-DCRQW-zd.js";import"./Collection-CVpRSqCL.js";import"./index-BnwW_tJ6.js";import"./Separator-DKLy9N42.js";import"./PressResponder-Ckqesgt-.js";import"./useLocalizedStringFormatter-DLUkfREQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Bvo1H-mj.js";import"./Dialog-vZJM8Z92.js";import"./useLocalizedStringFormatter-CNLlx_CF.js";import"./x-DsuzLeru.js";import"./createLucideIcon-uNpC4-lz.js";import"./Heading-BIOcd4_Y.js";import"./info-BRHzqpCe.js";import"./Tag-B_I2qv3_.js";import"./ListBox-Cu52-V-6.js";import"./DragAndDrop-Di2w72ed.js";import"./inertValue-DVguEXTK.js";import"./useListState-BqrOR259.js";import"./useHighlightSelectionDescription-Dyf9mQ8S.js";import"./useUpdateEffect-BcuwJAG0.js";import"./useHasTabbableChild-FOie0FtR.js";import"./check-BxEY5n_J.js";import"./ListBoxSection-CEs3c20W.js";import"./Virtualizer-CE6K4SrC.js";import"./useObserveElement-B8v3NoaO.js";import"./chevron-down-DYzQUWVh.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-DUTWpoL3.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
