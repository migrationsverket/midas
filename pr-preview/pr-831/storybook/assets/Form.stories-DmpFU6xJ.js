import{j as n}from"./iframe-DW_CkBZz.js";import{$ as j}from"./Form-CA1NRUSv.js";import{G}from"./Grid-CECxFIeK.js";import{G as e}from"./GridItem-DfsMjswh.js";import{T as r}from"./TextField-UASUScK0.js";import{S as I}from"./Select-hjnN2paj.js";import{B as a}from"./Button-CsCii_za.js";import{R as g,a as b}from"./Radio-Bz-3aMuZ.js";import{C as h}from"./CheckboxGroup-CM0SIvOy.js";import{C as k}from"./Checkbox-B8OYAhvu.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C6qXboJG.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-QOIITfpN.js";import"./useFocusRing-BqgvACUp.js";import"./index-BQzIfPhr.js";import"./index-BiuWtp_q.js";import"./TextFieldBase-CWrAUkJe.js";import"./TextField-Cxe_Hjjw.js";import"./FieldError-CZllAyM9.js";import"./Text-W-Pgs0fE.js";import"./Text-B-MWfqDJ.js";import"./context-CV7wLdlQ.js";import"./SelectionManager-DCy-_d0k.js";import"./useEvent-3cFIOO2d.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DHhHqlE_.js";import"./useDescription-YalU6O0b.js";import"./useControlledState-BIfeXPFC.js";import"./Group-DM7TNMjA.js";import"./Input-CxxQKOca.js";import"./Hidden-alpoAHDf.js";import"./Button-CzUoLe9j.js";import"./useLabels-CK5hJrqE.js";import"./useButton-B4RGy-eY.js";import"./useTextField-6o3RFXU6.js";import"./useField-Bog9kk3B.js";import"./TextField.module-DjUItNl5.js";import"./Label-DNKfybkg.js";import"./Dialog-CxUkUvfi.js";import"./RSPContexts-9AQi31Hi.js";import"./OverlayArrow-BEyCVIqm.js";import"./useResizeObserver-DbymfpkE.js";import"./Collection-Db7kuJaK.js";import"./index-Ch8xwKDW.js";import"./Separator-Bh0ycqnF.js";import"./PressResponder-BIPkP9px.js";import"./useLocalizedStringFormatter-CUp2U0s4.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B0zYcatc.js";import"./useLocalizedStringFormatter-BrC0vU-Q.js";import"./x-BnfGXi6j.js";import"./createLucideIcon-DPxzewqu.js";import"./Heading-cWcjeNHb.js";import"./info-D5BR0l0S.js";import"./Popover-C7LvITfA.js";import"./Tag-CftvQi2F.js";import"./ListBox-B5UAyIhT.js";import"./DragAndDrop-Bz3asWGK.js";import"./inertValue-D0BixVB2.js";import"./useListState-D7xxC2Yf.js";import"./useHighlightSelectionDescription-3Gt-CZsw.js";import"./useUpdateEffect-j5CBJ0Np.js";import"./useHasTabbableChild-DgDYxhcS.js";import"./check-DxQFa_hg.js";import"./ListBoxSection-CS-IEBtT.js";import"./Virtualizer-DRez_9I6.js";import"./useObserveElement-DdKasEsh.js";import"./chevron-down-ckc1ddpy.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BefMK3C-.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
