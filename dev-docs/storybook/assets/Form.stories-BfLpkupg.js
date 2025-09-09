import{j as n}from"./iframe-BSo4gsvr.js";import{$ as j}from"./Form-SvP2TbOM.js";import{G}from"./Grid-CxvzOspt.js";import{G as e}from"./GridItem-DK6qi3DP.js";import{T as r}from"./TextField-DWp0pbsO.js";import{S as I}from"./Select-fm_IOz7u.js";import{B as a}from"./Button-BkX9QSV1.js";import{R as g,a as b}from"./Radio-e20he7ap.js";import{C as h}from"./CheckboxGroup-XBTSPn0i.js";import{C as k}from"./Checkbox-BWlUNiaQ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-0Gf6jHdw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B-kbivV4.js";import"./useFocusRing-S3cIUjrh.js";import"./index-DbGRHx9-.js";import"./index-CT6uBtU9.js";import"./TextFieldBase-D6ZZh7P6.js";import"./TextField-DE5I9JH7.js";import"./FieldError-CGPKp8d5.js";import"./Text-kycnXTfi.js";import"./Text-CtxwIYtG.js";import"./ListKeyboardDelegate-uRYs3TUe.js";import"./SelectionManager-DsA-S4I3.js";import"./useEvent-DpV3Gmq5.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D1p5ffhX.js";import"./useDescription-DWl8xwdq.js";import"./useControlledState-2wYzA0Kf.js";import"./Group-BvqqcGom.js";import"./Input-IDZ75SOY.js";import"./Hidden-CLVw-VGC.js";import"./Button-w3oDsey0.js";import"./useLabels-CIMl--62.js";import"./useButton-DBZEyWkn.js";import"./useTextField-CzSsT6TA.js";import"./useField-BzTwIDiM.js";import"./TextField.module-8oYDuXgF.js";import"./Label-BXQzvToD.js";import"./Dialog-C0Yr8nsc.js";import"./RSPContexts-CV2UqsDB.js";import"./OverlayArrow-BFhdrsf4.js";import"./useResizeObserver-CM05d_q3.js";import"./Collection-BCpR9oCA.js";import"./index-Ce255hfJ.js";import"./Separator-Drt0OF4F.js";import"./PressResponder-ByXe5yYE.js";import"./useLocalizedStringFormatter-Bf9AquBJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CFgLyFJd.js";import"./Dialog-BTEmzADZ.js";import"./useLocalizedStringFormatter-lyGUKZXy.js";import"./x-C38a5_5B.js";import"./createLucideIcon-DOhr1T52.js";import"./Heading-rPTvkKpo.js";import"./info-BQWxtjDZ.js";import"./Tag-86YkTm8t.js";import"./ListBox-DZtuvBOc.js";import"./DragAndDrop-E0z5PuYi.js";import"./inertValue-C0GLJAUI.js";import"./useListState-CHYgHdt1.js";import"./useHighlightSelectionDescription-nbPN7uaa.js";import"./useUpdateEffect-CBpobUgp.js";import"./useHasTabbableChild-q43JjYGl.js";import"./check-_SvxXTV0.js";import"./ListBoxSection-DgyzXiBQ.js";import"./Virtualizer-DCV0z2LQ.js";import"./useObserveElement-B6gQV5lz.js";import"./chevron-down-DHOmZot8.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-CVECc54X.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
