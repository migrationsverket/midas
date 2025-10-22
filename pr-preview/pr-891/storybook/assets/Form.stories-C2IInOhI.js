import{j as n}from"./iframe-C1OjVKLQ.js";import{$ as j}from"./Form-CLeGCjIu.js";import{G}from"./Grid-Bct3RQm-.js";import{G as e}from"./GridItem-zIKZZvL-.js";import{T as r}from"./TextField-Cb98canQ.js";import{S as I}from"./Select-BAJzVie_.js";import{B as a}from"./Button-DhWY514l.js";import{R as g,a as b}from"./Radio-Dklo-ILz.js";import{C as h}from"./CheckboxGroup-CX46b05z.js";import{C as k}from"./Checkbox-RhwvqtT6.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BqJ8lzMo.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CuTeBXtI.js";import"./useFocusRing-DDPJ_J0E.js";import"./index-rMroQDpJ.js";import"./index-B_7_j7oG.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-ByqSrbVI.js";import"./TextField-otLJyqM_.js";import"./FieldError-C6hHY30r.js";import"./Text-BWMw7upc.js";import"./Text-B0u0FgxD.js";import"./RSPContexts-Dqv4fxN1.js";import"./Group-BeQ0Op-2.js";import"./Input-BSU9hQrf.js";import"./Hidden-CO3ECb5p.js";import"./Button-CO1ceYUP.js";import"./useLabels-Chpo7CqR.js";import"./useButton-D6Ng0KWn.js";import"./useTextField-B17BJH8N.js";import"./useControlledState-DymAS9IR.js";import"./useField-odABTSdM.js";import"./TextField.module-8GTEwpm_.js";import"./Label-D62eWD2g.js";import"./Dialog-CT_uP6EP.js";import"./OverlayArrow-HPanG1q7.js";import"./useResizeObserver-GBjmbtyh.js";import"./Collection-By3anzc3.js";import"./index-CVE9sDrJ.js";import"./Separator-Cz7-xowW.js";import"./SelectionManager-Cm9flOPl.js";import"./useEvent-7kK98PpR.js";import"./scrollIntoView-6xtkIAFo.js";import"./SelectionIndicator-CeZk7xbr.js";import"./useDescription-ZCYdd1bR.js";import"./ListKeyboardDelegate-nF1H7dZ6.js";import"./PressResponder-0z6gm0KA.js";import"./useLocalizedStringFormatter-BWJx7Up_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-rrZUu6o-.js";import"./VisuallyHidden-DPH9mEsF.js";import"./useLocalizedStringFormatter-eG8OdLkB.js";import"./x-BcNJmH4R.js";import"./createLucideIcon-B5uMbs8Z.js";import"./Heading-REVEpVRZ.js";import"./info-CV7dHoun.js";import"./Popover-CSusfb48.js";import"./Tag-5O_2wMWT.js";import"./ListBox-C3M76IDp.js";import"./DragAndDrop-Cko-WPQN.js";import"./inertValue-CCRuABxb.js";import"./useListState-BBMhCNAn.js";import"./useHighlightSelectionDescription-D_pV1J3M.js";import"./useUpdateEffect-ByK9Jn23.js";import"./useHasTabbableChild-_Tt4rT5L.js";import"./check-BOhlWMrP.js";import"./ListBoxSection-CFnmykg4.js";import"./Virtualizer-C2eQttRJ.js";import"./chevron-down-AQxKsU9_.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BHcBhZYR.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
