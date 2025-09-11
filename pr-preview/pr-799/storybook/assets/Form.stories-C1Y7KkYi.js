import{j as n}from"./iframe-DlQXzWkT.js";import{$ as j}from"./Form-BeBIoxGT.js";import{G}from"./Grid-CcgsJ7cz.js";import{G as e}from"./GridItem-9JxAqjla.js";import{T as r}from"./TextField-DPVNFnTn.js";import{S as I}from"./Select-DpmaCIvB.js";import{B as a}from"./Button-C2-H5Yp3.js";import{R as g,a as b}from"./Radio-Di95EnoA.js";import{C as h}from"./CheckboxGroup-Dp5020T_.js";import{C as k}from"./Checkbox-D6_8suRg.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D2cZxT6P.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BP_uknHM.js";import"./useFocusRing-KUjsNCH5.js";import"./index-Cj-XreSW.js";import"./index-2dhXodWQ.js";import"./TextFieldBase-FtJBd0fB.js";import"./TextField-X0opDFwu.js";import"./FieldError-CyxfidUe.js";import"./Text-zkVl9663.js";import"./Text-38cN6Nlg.js";import"./ListKeyboardDelegate-By_gKHxf.js";import"./SelectionManager-BhGHeeBe.js";import"./useEvent-BI3RD68J.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-wtimiP2y.js";import"./useDescription-Ccn3hs5D.js";import"./useControlledState-EWb47Rz2.js";import"./Group-DxGu_Exp.js";import"./Input-CNpNVuWH.js";import"./Hidden-BIaOyXkO.js";import"./Button-sGFx9a4E.js";import"./useLabels-DQKL7dPf.js";import"./useButton-CWMPT-9M.js";import"./useTextField-CnYUHbUS.js";import"./useField-DUVx2xE0.js";import"./TextField.module-DjUItNl5.js";import"./Label-BEGogQj3.js";import"./Dialog-B7ant1Pw.js";import"./RSPContexts-BCFB5Icm.js";import"./OverlayArrow-BMb8KR9G.js";import"./useResizeObserver-B33m2Epd.js";import"./Collection-C5r7pk5m.js";import"./index-YNufsx12.js";import"./Separator-CPXu4J5T.js";import"./PressResponder-a3KpMNJQ.js";import"./useLocalizedStringFormatter-CnknNQRY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-eXShAtNU.js";import"./Dialog-2P-BzFKk.js";import"./useLocalizedStringFormatter-WFnRoitg.js";import"./x-Dr3MeEFU.js";import"./createLucideIcon-CULqAiZE.js";import"./Heading-BdFKf1Nx.js";import"./info-CNELYPvX.js";import"./Tag-BFOX0tCm.js";import"./ListBox-DZIlWLO2.js";import"./DragAndDrop-8m1Q4Svy.js";import"./inertValue-Cn9EtWzU.js";import"./useListState-stcERE6m.js";import"./useHighlightSelectionDescription-DS5ofVX7.js";import"./useUpdateEffect-DPDSFyyt.js";import"./useHasTabbableChild-DBFgIno3.js";import"./check-BJayTEgX.js";import"./ListBoxSection-Dy4l1k0m.js";import"./Virtualizer-D9LHv939.js";import"./useObserveElement-BgkWgzfY.js";import"./chevron-down-CPAz8RIq.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Dshdwj35.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
