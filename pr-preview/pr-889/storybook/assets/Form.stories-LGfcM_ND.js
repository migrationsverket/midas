import{j as n}from"./iframe-DcZZdgbW.js";import{$ as j}from"./Form-DJTWDf6g.js";import{G}from"./Grid-ghjWJRql.js";import{G as e}from"./GridItem-Ld6o-Elh.js";import{T as r}from"./TextField-B8LHy9qX.js";import{S as I}from"./Select-CgnsfQ8K.js";import{B as a}from"./Button-GvNjgVAz.js";import{R as g,a as b}from"./Radio-Bo0HeSZL.js";import{C as h}from"./CheckboxGroup-fmX5rmMl.js";import{C as k}from"./Checkbox-CabbQZUP.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DrnzIEIs.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CJt2kkKD.js";import"./useFocusRing-qyGXXSeH.js";import"./index-DkG7CGgR.js";import"./index-BKwb7ouL.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DIcBICz5.js";import"./TextField-CCk1QBaZ.js";import"./FieldError-B6IPscqs.js";import"./Text-jfZBkye-.js";import"./Text-wZ8CmeH6.js";import"./RSPContexts-CbEMQJfJ.js";import"./Group-BidcJXJY.js";import"./Input-CARKte5Y.js";import"./Hidden-BriNxT9G.js";import"./Button-D-a6MaII.js";import"./useLabels-BYzOFFr_.js";import"./useButton-voFMNHZi.js";import"./useTextField-Cs753TNh.js";import"./useControlledState-iX7xNF8j.js";import"./useField-DeWR9BP5.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CtkLgGpH.js";import"./Dialog-1lDB_fF7.js";import"./OverlayArrow-rhDFnyoo.js";import"./useResizeObserver-BnIsVC1-.js";import"./Collection-IzVc2QVZ.js";import"./index-aNdGPuib.js";import"./Separator-OztRIelF.js";import"./SelectionManager-BPoVaRFv.js";import"./useEvent-sL96UWCn.js";import"./scrollIntoView-By-oFVhN.js";import"./SelectionIndicator-Btu2aLDc.js";import"./useDescription-C8Q3adq3.js";import"./ListKeyboardDelegate-DowFHqKA.js";import"./PressResponder-BWrwfk_x.js";import"./useLocalizedStringFormatter-B5guvfdz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DSNKbfv_.js";import"./VisuallyHidden-CA62wxaQ.js";import"./useLocalizedStringFormatter-DQZq2kj6.js";import"./x-Doltl4Qt.js";import"./createLucideIcon-Ca8XYp50.js";import"./Heading-PPvTBsQf.js";import"./info-Ctwg0VQq.js";import"./Popover-vVFi5_BN.js";import"./Tag-BNBhBbnm.js";import"./ListBox-DMwHsS4T.js";import"./DragAndDrop-ANNKkv3b.js";import"./inertValue-BDfw9een.js";import"./useListState-CANJQRYq.js";import"./useHighlightSelectionDescription-BAZteqp9.js";import"./useUpdateEffect-Sv5tbu2V.js";import"./useHasTabbableChild-tu5ritTT.js";import"./check-BHP2DngO.js";import"./ListBoxSection-Bpar3fFK.js";import"./Virtualizer-CcAAI-fV.js";import"./chevron-down-Cxt6Ghlm.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CTtKIlfR.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
