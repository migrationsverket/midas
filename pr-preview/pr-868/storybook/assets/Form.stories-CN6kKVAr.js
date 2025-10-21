import{j as n}from"./iframe-HgmhGHLl.js";import{$ as j}from"./Form-onZWa0fe.js";import{G}from"./Grid-C35tp117.js";import{G as e}from"./GridItem-D-6J5QVo.js";import{T as r}from"./TextField-BM09HeAd.js";import{S as I}from"./Select-BWQOQhq1.js";import{B as a}from"./Button-BHFGsmXh.js";import{R as g,a as b}from"./Radio-fpV8AfaJ.js";import{C as h}from"./CheckboxGroup-mBNG-59J.js";import{C as k}from"./Checkbox-BggrIBfX.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CziwxoXp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BVl4Hbh8.js";import"./useFocusRing-BycvwXEz.js";import"./index-nOBLzIog.js";import"./index-Dl-UTAq4.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-M5cuj-e3.js";import"./TextField-C2H5dcxR.js";import"./FieldError-ClXhktt9.js";import"./Text-DiEZk_-X.js";import"./Text-ydCK6yuT.js";import"./RSPContexts-32ewsRzf.js";import"./Group-Cd7KynMB.js";import"./Input-DELfUZiP.js";import"./Hidden-gRQeZ2RV.js";import"./Button-DwzAcUmG.js";import"./useLabels-BFJ3u6sq.js";import"./useButton-BRgJ0pNs.js";import"./useTextField-xnTpgG_9.js";import"./useControlledState-DmDb1g5E.js";import"./useField-D4RGF1ty.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CPIVlSEu.js";import"./Dialog-CrqQhlv8.js";import"./OverlayArrow-BUoAioQH.js";import"./useResizeObserver-35vjFrPr.js";import"./Collection-DZjBQ_3v.js";import"./index-CiUPI1fO.js";import"./Separator-4NgbAsJX.js";import"./SelectionManager-CvHpzhSB.js";import"./useEvent-Bsjvu_tA.js";import"./scrollIntoView-vb_XAWSY.js";import"./SelectionIndicator-e2_54zKm.js";import"./useDescription-V43EqUT8.js";import"./ListKeyboardDelegate-DdSFwzQE.js";import"./PressResponder-Dt5qHX8O.js";import"./useLocalizedStringFormatter-BX_5XxQM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-BGgRbsvT.js";import"./VisuallyHidden-Dby1oNTl.js";import"./useLocalizedStringFormatter-VDmwyoJj.js";import"./x-D5SIT5yy.js";import"./createLucideIcon-NgKMkvRv.js";import"./Heading-BKMJIZxL.js";import"./info-Cco-5Tit.js";import"./Popover-D7mfXAal.js";import"./Tag-DIyJ2fHM.js";import"./ListBox-iScCD58J.js";import"./DragAndDrop-dXMyIMqV.js";import"./inertValue-C7HZ2QUu.js";import"./useListState-DALDYJ9x.js";import"./useHighlightSelectionDescription-Bw13ruac.js";import"./useUpdateEffect-DdsJGaEr.js";import"./useHasTabbableChild-DFSa1BId.js";import"./check-CGbFHjq8.js";import"./ListBoxSection-z7b5MYm3.js";import"./Virtualizer-DEIBEP6R.js";import"./chevron-down-rtYK9O2v.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CTJz3kLT.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
