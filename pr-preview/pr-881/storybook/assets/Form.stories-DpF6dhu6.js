import{j as n}from"./iframe-DqOnImtB.js";import{$ as j}from"./Form-CH3EwyVV.js";import{G}from"./Grid-CG5ZinXB.js";import{G as e}from"./GridItem-DqEYt-i8.js";import{T as r}from"./TextField-Cbgp9DFi.js";import{S as I}from"./Select-C65KAGG-.js";import{B as a}from"./Button-e7r9nziE.js";import{R as g,a as b}from"./Radio-Dm-OHYBn.js";import{C as h}from"./CheckboxGroup-P5P-TuOl.js";import{C as k}from"./Checkbox-5aHXCSWA.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CtOUdhlm.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CfdrQU6j.js";import"./useFocusRing-CTLKxZOl.js";import"./index-BqMFRqFO.js";import"./index-BTjQfJwM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CTBvG1HE.js";import"./TextField-B1EbsJ3F.js";import"./FieldError-Cm2qQKFy.js";import"./Text-spQo0dXp.js";import"./Text-DSGtwwI6.js";import"./RSPContexts-DgymFxc4.js";import"./Group-B8IfoM0-.js";import"./Input-BmSlIcim.js";import"./Hidden-DaJ_gIh_.js";import"./Button-BXZf-Ntr.js";import"./useLabels-BbJEqnqr.js";import"./useButton-DiBhr5IU.js";import"./useTextField-BRWbFVMU.js";import"./useControlledState-Xdh2dYbf.js";import"./useField-BIc4tuVD.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BYitrETt.js";import"./Dialog-DI-_3cx4.js";import"./OverlayArrow-Dair3uRW.js";import"./useResizeObserver-BHSbInb5.js";import"./Collection-BWphW22x.js";import"./index-DnpPsMrd.js";import"./Separator-CBY3vEPw.js";import"./SelectionManager-C663Tjyk.js";import"./useEvent-XDgY8-01.js";import"./scrollIntoView-D6qed4DQ.js";import"./SelectionIndicator-CvsS8HVG.js";import"./useDescription-BDqo8izq.js";import"./ListKeyboardDelegate-Cv3S2CMs.js";import"./PressResponder-Y39waxAu.js";import"./useLocalizedStringFormatter-DWAo3GxI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DLQ8g5-_.js";import"./VisuallyHidden-DK-0L129.js";import"./useLocalizedStringFormatter-P4QA7qHN.js";import"./x-ru-Jacwq.js";import"./createLucideIcon-DrxU8fU6.js";import"./Heading-B1tvovrF.js";import"./info-4ok1dPhz.js";import"./Popover-CPZF2k_O.js";import"./Tag-DsREAkpJ.js";import"./ListBox-BhwPJ-OC.js";import"./DragAndDrop-DjiluwX0.js";import"./inertValue-DJ8anEyd.js";import"./useListState-Cd335Lex.js";import"./useHighlightSelectionDescription-C6G4CSwX.js";import"./useUpdateEffect-CDisofNV.js";import"./useHasTabbableChild-DpFS3XDl.js";import"./check-CMW8brea.js";import"./ListBoxSection-C1VysS7X.js";import"./Virtualizer-Cl80DO8B.js";import"./chevron-down-DApylgqY.js";import"./ListBoxPopover-CsxrjCiH.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-Cr5XOAGB.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Nn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Nn as __namedExportsOrder,wn as default};
