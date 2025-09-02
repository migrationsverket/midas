import{j as n}from"./iframe-BvPtqS2G.js";import{$ as j}from"./Form-BciIOWvj.js";import{G}from"./Grid-UxNQ3fEY.js";import{G as e}from"./GridItem-BYK7auzZ.js";import{T as r}from"./TextField-DvgV5uxX.js";import{S as I}from"./Select-QZkyyuDo.js";import{B as a}from"./Button-BR1Z58yk.js";import{R as g,a as b}from"./Radio-DdvlMkqo.js";import{C as h}from"./CheckboxGroup-CT37BUb8.js";import{C as k}from"./Checkbox-D_Gha8uW.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-NMHfACp9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C9rTOddQ.js";import"./useFocusRing-BCd6TYqN.js";import"./index-Cd0jV8V9.js";import"./index-DuIc0BHV.js";import"./TextFieldBase-BrfexZm7.js";import"./TextField-CkJ7nfrC.js";import"./FieldError-CvpGnLHq.js";import"./Text-BA7EmDsn.js";import"./Text-CwbTGHIW.js";import"./ListKeyboardDelegate-oPVdWuM5.js";import"./SelectionManager-BUq6rVR4.js";import"./useEvent-SyKjH5QG.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DyLWRX5p.js";import"./useDescription-wDuBxKBN.js";import"./useControlledState-CAmO0btV.js";import"./Group-TQO6jQRF.js";import"./Input-Bq7oYo5P.js";import"./Hidden-0in_S3Ut.js";import"./Button-D80995he.js";import"./useLabels-D20p6pe_.js";import"./useButton-CgumgYro.js";import"./useTextField-BV6L-hID.js";import"./useField-DehB-1NL.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-GV6u1QwH.js";import"./Dialog-De1BSQaH.js";import"./RSPContexts-DKfcJBgp.js";import"./OverlayArrow-BcR-TjA2.js";import"./useResizeObserver-Dk2cmDYf.js";import"./Collection-Bf1Mbo02.js";import"./index-4G6QSnZx.js";import"./Separator-BeiF9CUk.js";import"./PressResponder-DjWoiL_6.js";import"./useLocalizedStringFormatter-CCaZ7Iku.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Bt63RKu7.js";import"./Dialog-diLBYsQb.js";import"./useLocalizedStringFormatter-DL2N_CLj.js";import"./x-Beloy1_T.js";import"./createLucideIcon-CXtGN1AJ.js";import"./Heading-_PKocb3P.js";import"./info-DW2Br0om.js";import"./Tag-XYuDRUd5.js";import"./ListBox-BeVsyKqR.js";import"./DragAndDrop-DBg6On9P.js";import"./inertValue-BlI5fpSO.js";import"./useListState-CzcgBax9.js";import"./useHighlightSelectionDescription-DTWuUFNY.js";import"./useUpdateEffect-Bv2SeKg3.js";import"./useHasTabbableChild-Dx6NlnRI.js";import"./check-hldRuqHC.js";import"./ListBoxSection-7RBnp6kX.js";import"./Virtualizer-CyL5wDb4.js";import"./useObserveElement-CHuSnwZc.js";import"./chevron-down-C_VTus8V.js";import"./Button.module-9Myim2MN.js";import"./useToggleState-BwE6M6pe.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
