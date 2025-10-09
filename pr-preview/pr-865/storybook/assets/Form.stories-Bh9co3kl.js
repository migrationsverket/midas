import{j as n}from"./iframe-DYvBoIeB.js";import{$ as j}from"./Form-DCxDxFlm.js";import{G}from"./Grid-DJQlUv4p.js";import{G as e}from"./GridItem-BSeORLvp.js";import{T as r}from"./TextField-DMP51d7Q.js";import{S as I}from"./Select-BKOXqafc.js";import{B as a}from"./Button-CedPnDJ3.js";import{R as g,a as b}from"./Radio-CMRRFqxu.js";import{C as h}from"./CheckboxGroup-DIR25NXi.js";import{C as k}from"./Checkbox-E46yIckp.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DDiS5oXN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-FOirEgU6.js";import"./useFocusRing-DIEZm14m.js";import"./index-D_T-E6yx.js";import"./index-C9PU0sfT.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CiAkc5aF.js";import"./TextField-CEv-7mhj.js";import"./FieldError-63NavGzH.js";import"./Text-aJLNAsRa.js";import"./Text-DwUvqAt2.js";import"./context-gpG0o6Ng.js";import"./SelectionManager-CuyLcray.js";import"./useEvent-BgaiJrnQ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CEqeXGW5.js";import"./useDescription-F3r1Vll5.js";import"./useControlledState-BJevUG78.js";import"./Group-DNxq3kIu.js";import"./Input-DCIazP8Z.js";import"./Hidden-CGOYMhLR.js";import"./Button-BBSTQSBw.js";import"./useLabels-DcUIhoyH.js";import"./useButton-Cw1g9k9x.js";import"./useTextField-DL2yx9H_.js";import"./useField-CvWctHTT.js";import"./TextField.module-DjUItNl5.js";import"./Label-BU09sHqy.js";import"./Dialog-CLR4BaCD.js";import"./RSPContexts-Jvz2i0K-.js";import"./OverlayArrow-h9c5UvgZ.js";import"./useResizeObserver-DJPhYJ2n.js";import"./Collection-C26jvwyg.js";import"./index-DVfh8aq-.js";import"./Separator-ByB4ZB2I.js";import"./PressResponder-BRmr5WRO.js";import"./useLocalizedStringFormatter-DqC_Eeij.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B8uvMkAk.js";import"./useLocalizedStringFormatter-BRWwTzaG.js";import"./x--2yk7Een.js";import"./createLucideIcon-DBPncP5f.js";import"./Heading-D0lBZ-qY.js";import"./info-gywVkrdg.js";import"./Popover-DfMhifhs.js";import"./Tag-sWbzrYEr.js";import"./ListBox-BLJT-XBD.js";import"./DragAndDrop-DShXwicC.js";import"./inertValue-DPmndaBl.js";import"./useListState-ClrPqBkL.js";import"./useHighlightSelectionDescription-BgJzJidT.js";import"./useUpdateEffect-Wb1anZ27.js";import"./useHasTabbableChild-AvOCbZ-U.js";import"./check-CffOc9qH.js";import"./ListBoxSection-OwzOk4Rt.js";import"./Virtualizer-21TSQPXF.js";import"./useObserveElement-BmzZCZ54.js";import"./chevron-down-n3BQUIK9.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-rLvZkofK.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
