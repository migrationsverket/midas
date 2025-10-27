import{j as n}from"./iframe-D-svbNTC.js";import{$ as j}from"./Form-CYmp8t8a.js";import{G}from"./Grid-D-dC5Ii0.js";import{G as e}from"./GridItem-ByXqaTbE.js";import{T as r}from"./TextField-7QeI0H0R.js";import{S as I}from"./Select-fPsGkBvn.js";import{B as a}from"./Button-DkOV0qda.js";import{R as g,a as b}from"./Radio-C-6bbqh0.js";import{C as h}from"./CheckboxGroup-CK3SXwvl.js";import{C as k}from"./Checkbox-tJQKMrHx.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BWvNjwRn.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C-rvjyym.js";import"./useFocusRing-B-mX-xHO.js";import"./index-DWTcMa9i.js";import"./index-C9p5nswc.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bk9t9dIN.js";import"./TextField-BRZSwWQP.js";import"./FieldError-D7l71DQR.js";import"./Text-DfTVuBSz.js";import"./Text-BddRpy9x.js";import"./RSPContexts-C_5i33gF.js";import"./Group-CrY0Q4lO.js";import"./Input-BCuBDtzQ.js";import"./Hidden-BFovijmy.js";import"./Button-CQyZWjDO.js";import"./useLabels-De6eVy31.js";import"./useButton-BVQBLJSS.js";import"./useTextField-sIFrN8aO.js";import"./useControlledState-D8fgeVqN.js";import"./useField-CjtQUcp1.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-Wl1pJXnv.js";import"./Dialog-9vQEsb7i.js";import"./OverlayArrow-3jCUaBEC.js";import"./useResizeObserver-nq5cR5E5.js";import"./Collection-B1yIeNpA.js";import"./index-DmtZVvBC.js";import"./Separator-B8lmbbkj.js";import"./SelectionManager-c3m4KWfw.js";import"./useEvent-DhK1GJXf.js";import"./scrollIntoView-JT3f5kky.js";import"./SelectionIndicator-CsxXolWd.js";import"./useDescription-Cm9PI3ZO.js";import"./ListKeyboardDelegate-C6yX5QjH.js";import"./PressResponder-BohrhUB6.js";import"./useLocalizedStringFormatter-COcVzmZc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-eogDHESf.js";import"./VisuallyHidden-Dr0Ad6GZ.js";import"./useLocalizedStringFormatter-SFscSUWd.js";import"./x-DiFSj5d_.js";import"./createLucideIcon-DUXLrqsR.js";import"./Heading-CU4eAmtL.js";import"./info-BTQV1NsW.js";import"./Popover-CWOJ0yTl.js";import"./Tag-CPKyLVYG.js";import"./ListBox-DWQQtku_.js";import"./DragAndDrop-LlJWG0Io.js";import"./inertValue-DCC2T0yU.js";import"./useListState-BsEKT8VW.js";import"./useHighlightSelectionDescription-VtFYuju8.js";import"./useUpdateEffect-BNjr3QK0.js";import"./useHasTabbableChild-BPtyPmbB.js";import"./check-C3MWTiVl.js";import"./ListBoxSection-De1hQ-Ue.js";import"./Virtualizer-BoglSxiX.js";import"./chevron-down-oG4xcyV4.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DN5brxqe.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
