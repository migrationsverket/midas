import{j as n}from"./iframe-D-5s2CQ-.js";import{$ as j}from"./Form-i5Cycsau.js";import{G}from"./Grid-DWqUQBke.js";import{G as e}from"./GridItem-hk9vbceJ.js";import{T as r}from"./TextField-DP9sKe-G.js";import{S as I}from"./Select-eeEUHfqJ.js";import{B as a}from"./Button-Brc5DYj-.js";import{R as g,a as b}from"./Radio-JiVySWqj.js";import{C as h}from"./CheckboxGroup-CSsTLvzM.js";import{C as k}from"./Checkbox-Bp1Po5Dp.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C-QDo6ht.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DaPdywVo.js";import"./useFocusRing-DXLac4Vz.js";import"./index-DDv84uaM.js";import"./index-C3tLKllm.js";import"./TextFieldBase-DBXv4WuC.js";import"./TextField-DMMmLKDm.js";import"./FieldError-CLduKlqp.js";import"./Text-DCB8gNga.js";import"./Text-CykNt_9d.js";import"./context-DFP1wFWm.js";import"./SelectionManager-DGKviMoR.js";import"./useEvent-nZJX3WKp.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BrqFLppz.js";import"./useDescription-sqbxt0O5.js";import"./useControlledState-BHmtkJuO.js";import"./Group-C7Vn3-LX.js";import"./Input-JQggMewB.js";import"./Hidden-Dt8roYch.js";import"./Button-DGBml5uP.js";import"./useLabels-BJyUv1gn.js";import"./useButton-K9YubvFE.js";import"./useTextField-CYML2Y27.js";import"./useField-HJijnwIC.js";import"./TextField.module-DjUItNl5.js";import"./Label-D556Lb7b.js";import"./Dialog-BhAksdmO.js";import"./RSPContexts-CGY19JB4.js";import"./OverlayArrow-DRHjEBN6.js";import"./useResizeObserver-Dt8oLXpb.js";import"./Collection-DI_OiYNG.js";import"./index-bV0qLqYB.js";import"./Separator-DD6pwbAv.js";import"./PressResponder-Criw0AIG.js";import"./useLocalizedStringFormatter-cV620eVT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DRSuChSA.js";import"./useLocalizedStringFormatter-CjPUOHIi.js";import"./x-49c3vQy8.js";import"./createLucideIcon-X8GxMf4o.js";import"./Heading-BsTq35Tt.js";import"./info-BCwKnvFA.js";import"./Popover-C8iL_ZRD.js";import"./Tag-Yvi7IYEy.js";import"./ListBox-qOG2q7D8.js";import"./DragAndDrop-SMt0FjB4.js";import"./inertValue-DNEy4WQL.js";import"./useListState-B0gfECRl.js";import"./useHighlightSelectionDescription-CWK232ub.js";import"./useUpdateEffect-Dp8I-2td.js";import"./useHasTabbableChild-DsqrNlnV.js";import"./check-DpMEkYtQ.js";import"./ListBoxSection-Chh05nTf.js";import"./Virtualizer-QxAtRDwf.js";import"./useObserveElement-BO7-VAaP.js";import"./chevron-down-CPZlOItj.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DCNENh9N.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
