import{j as n}from"./iframe-DR_kK9Cg.js";import{$ as j}from"./Form-Dz-S66Ip.js";import{G}from"./Grid-D7CSjeaS.js";import{G as e}from"./GridItem-Hg0AtCvW.js";import{T as r}from"./TextField-BujjwcTS.js";import{S as I}from"./Select-CG22qD_B.js";import{B as a}from"./Button-CY6ysksa.js";import{R as g,a as b}from"./Radio-BiysOM6i.js";import{C as h}from"./CheckboxGroup-BBnk4wOg.js";import{C as k}from"./Checkbox-CGk-PPoY.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DLRouJf4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Et6_r-fF.js";import"./useFocusRing-CEvuj93z.js";import"./index-DWZuCpOn.js";import"./index-D7aTveDw.js";import"./TextFieldBase-DF_3S9zh.js";import"./TextField-CDrKj9wF.js";import"./FieldError-vK_LBY_M.js";import"./Text-D-dwn-t5.js";import"./Text-uU3qBLAP.js";import"./ListKeyboardDelegate-CATd-T--.js";import"./SelectionManager-CUZgpx6w.js";import"./useEvent-O9famMAV.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B0UiIo32.js";import"./useDescription-6xfEjRv2.js";import"./useControlledState-BhA46bjE.js";import"./Group-CcuA6bAq.js";import"./Input-BCIXoaus.js";import"./Hidden-Cs5uIpgP.js";import"./Button-CnUbMn85.js";import"./useLabels-DoP5dxDy.js";import"./useButton-BYQAQrwn.js";import"./useTextField-f2cwQQ7_.js";import"./useField-DUxVTCFc.js";import"./TextField.module-DjUItNl5.js";import"./Label-pIHREN_i.js";import"./Dialog-CmflTZdt.js";import"./RSPContexts-BLTilZxF.js";import"./OverlayArrow-DXANcAeu.js";import"./useResizeObserver-D3LVR-4I.js";import"./Collection-Dkj2DWnc.js";import"./index-Dft9EgRy.js";import"./Separator-Bly2QJ6z.js";import"./PressResponder-C1eZM6f1.js";import"./useLocalizedStringFormatter-OM6v2DqJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B7Hr5CvR.js";import"./Dialog-CpPxzjcl.js";import"./useLocalizedStringFormatter-ChGtIIwu.js";import"./x-BzAYrKXy.js";import"./createLucideIcon-Cn7oDdhF.js";import"./Heading-pbNvXVpX.js";import"./info-fCyPIoNh.js";import"./Tag-Dg8EHFOP.js";import"./ListBox-Bc8OI0Tb.js";import"./DragAndDrop-CGQZgNCu.js";import"./inertValue-C0VyHb_m.js";import"./useListState-DVMCqDMd.js";import"./useHighlightSelectionDescription-BWctMHna.js";import"./useUpdateEffect-Bzl6AC3o.js";import"./useHasTabbableChild-CYVxm2b1.js";import"./check-oYrJqnar.js";import"./ListBoxSection-DY4pPFPL.js";import"./Virtualizer-BhRFizUN.js";import"./useObserveElement-B8ShudUQ.js";import"./chevron-down-Bc8V7FDn.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-C7uxtu5G.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
