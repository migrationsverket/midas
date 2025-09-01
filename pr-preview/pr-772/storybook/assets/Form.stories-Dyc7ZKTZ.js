import{j as n}from"./iframe-B1Ln_6BK.js";import{$ as j}from"./Form-5bQwk4R9.js";import{G}from"./Grid-BEVZ8ovE.js";import{G as e}from"./GridItem-C_ukCzv3.js";import{T as r}from"./TextField-BXWyYXFy.js";import{S as I}from"./Select-BczFrlMz.js";import{B as a}from"./Button-XOySptwn.js";import{R as g,a as b}from"./Radio-Do1brCEa.js";import{C as h}from"./CheckboxGroup-DfRBozpx.js";import{C as k}from"./Checkbox-DZasCX1R.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BaCDDhvB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CnK8Qfvb.js";import"./useFocusRing-DPzPWGkm.js";import"./index-BBjK1mW0.js";import"./index-CiSljkbK.js";import"./TextFieldBase-tCg_MtAe.js";import"./TextField-BJAYzFt1.js";import"./FieldError-J_RH0dQU.js";import"./Text-Bg5zvPq8.js";import"./Text-CBIUASFQ.js";import"./ListKeyboardDelegate-DpQ7VTfX.js";import"./SelectionManager-Czr6YsDJ.js";import"./useEvent-Cl28tybm.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CNrafrSU.js";import"./useDescription-BnyrTuIO.js";import"./useControlledState-Chec2RE4.js";import"./Group-BIEPLwe1.js";import"./Input-C-ZNlmuF.js";import"./Hidden-x1sVAfDf.js";import"./Button-B5rSqXAI.js";import"./useLabels-Byb-0e50.js";import"./useButton-IgbbXmnU.js";import"./useTextField-CaEV72tm.js";import"./useField-DMioO8QD.js";import"./TextField.module-BrIGiDQC.js";import"./Label-ZGvo6KVD.js";import"./Dialog-CRlBoR7R.js";import"./RSPContexts-CPREjl8E.js";import"./OverlayArrow-WA35oBml.js";import"./useResizeObserver-DaLsZ8SI.js";import"./Collection-GWAYTJrQ.js";import"./index-CIWF-vhY.js";import"./Separator-DEym9c6S.js";import"./PressResponder-DJpVJVzK.js";import"./useLocalizedStringFormatter-CFzF5SCS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BlBzguW-.js";import"./Dialog-CoruZsXl.js";import"./useLocalizedStringFormatter-CQpbbt0Y.js";import"./x-__lri6CU.js";import"./createLucideIcon-Dju8plin.js";import"./Heading-CnOchifC.js";import"./info-CqUTKKz8.js";import"./Tag-BuMPk86i.js";import"./ListBox-q9KkDHjq.js";import"./DragAndDrop-DxeVIfwL.js";import"./inertValue-k6PcVWkz.js";import"./useListState-VKPJakCw.js";import"./useHighlightSelectionDescription-oNl_TEBN.js";import"./useUpdateEffect-Ck5ApEHk.js";import"./useHasTabbableChild-CCK6lfI6.js";import"./check-BqUfpgV-.js";import"./ListBoxSection-D4VSzPt9.js";import"./Virtualizer-edpKTBgH.js";import"./useObserveElement-Cx3ENK5p.js";import"./chevron-down-R6YT8Sqz.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-BnXu-Ikl.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
