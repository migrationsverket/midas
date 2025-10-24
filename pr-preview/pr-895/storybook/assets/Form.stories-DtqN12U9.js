import{j as n}from"./iframe-CAJmKs3V.js";import{$ as j}from"./Form-zC4PBs5s.js";import{G}from"./Grid-DiV6z-R-.js";import{G as e}from"./GridItem-BZ_jaDkS.js";import{T as r}from"./TextField-BD8B36Hp.js";import{S as I}from"./Select-aIcWMy4A.js";import{B as a}from"./Button-w830SpP-.js";import{R as g,a as b}from"./Radio-Dgezk21C.js";import{C as h}from"./CheckboxGroup-CID1DJyZ.js";import{C as k}from"./Checkbox-CT8HOHKK.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-3EJAlCWl.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bwyd4POB.js";import"./useFocusRing-D87Pun_L.js";import"./index-xPQ4mf9A.js";import"./index-CXkaHWWR.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DjGCrn8G.js";import"./TextField-haOXhDd3.js";import"./FieldError-Csb1rSdT.js";import"./Text-yDbSXUon.js";import"./Text-B3pZsyQQ.js";import"./RSPContexts-Byt3VTZ8.js";import"./Group-GDOOLu-u.js";import"./Input-DaIT0P6G.js";import"./Hidden-BkNW_0Wy.js";import"./Button-FM25fIbA.js";import"./useLabels--5UQ6pvu.js";import"./useButton-0YiKXlvF.js";import"./useTextField-DREgRJ66.js";import"./useControlledState-UPnyjPAI.js";import"./useField-nY_WXMeY.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CBEBj6BU.js";import"./Dialog-CFC4fuPe.js";import"./OverlayArrow-BzkFq8B0.js";import"./useResizeObserver-Coej2-Pd.js";import"./Collection-CUQXLpkZ.js";import"./index-Dv6wHXbi.js";import"./Separator-C7UHOn1B.js";import"./SelectionManager-C95AVMOi.js";import"./useEvent-12femKQ2.js";import"./scrollIntoView-Dobvy4hP.js";import"./SelectionIndicator-DkhrFKUS.js";import"./useDescription-Dl9t34EO.js";import"./ListKeyboardDelegate-QHVXFpwE.js";import"./PressResponder-BBqneswN.js";import"./useLocalizedStringFormatter-gdZEuedA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Bm-Z1ND7.js";import"./VisuallyHidden-DuPPTKrH.js";import"./useLocalizedStringFormatter-BiAmxr5U.js";import"./x-DqeBaAn8.js";import"./createLucideIcon-C2v2DPOU.js";import"./Heading-Ba_b9FWL.js";import"./info-BUVrO083.js";import"./Popover-LV44AXCP.js";import"./Tag-B0u3XqRG.js";import"./ListBox-DyWBWAAA.js";import"./DragAndDrop-DExtelm2.js";import"./inertValue-BwfotRTK.js";import"./useListState-CEi132wV.js";import"./useHighlightSelectionDescription-DMvtx1Gb.js";import"./useUpdateEffect-zdOUgAkc.js";import"./useHasTabbableChild-3wjulMCP.js";import"./check-CxTReBO6.js";import"./ListBoxSection-CHcGo_6X.js";import"./Virtualizer-D2V9-WqK.js";import"./chevron-down-DhHgFQKc.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BESfin62.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
