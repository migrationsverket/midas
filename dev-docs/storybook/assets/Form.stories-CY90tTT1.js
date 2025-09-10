import{j as n}from"./iframe-BlLk1VyU.js";import{$ as j}from"./Form-5Nawwpx1.js";import{G}from"./Grid-Dsp-DCW_.js";import{G as e}from"./GridItem-C3YmY4cE.js";import{T as r}from"./TextField-DyrDpwIW.js";import{S as I}from"./Select-Csc-VJyv.js";import{B as a}from"./Button-BrFWd1-E.js";import{R as g,a as b}from"./Radio-C-lgDGOL.js";import{C as h}from"./CheckboxGroup-vGVg22gi.js";import{C as k}from"./Checkbox-B-nDrE26.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BMIAgU5v.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DBqPDNeR.js";import"./useFocusRing-D8E6mRpR.js";import"./index-4SRLjcVj.js";import"./index-BtDCmG82.js";import"./TextFieldBase-D91hepow.js";import"./TextField-Cz-bgQKV.js";import"./FieldError-DOjWjFal.js";import"./Text-DhD9pX_N.js";import"./Text-CUfoQbGD.js";import"./ListKeyboardDelegate-uUg_tTyg.js";import"./SelectionManager-Bf9tOt-A.js";import"./useEvent-AnR5J6S_.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CyqYCPxV.js";import"./useDescription-CAWnRg-q.js";import"./useControlledState-BN1j5LX2.js";import"./Group-D5cSoj1z.js";import"./Input-Dl9u6KNO.js";import"./Hidden-JZWJ_5vv.js";import"./Button-D1aJnJI-.js";import"./useLabels-Dnu8IOVr.js";import"./useButton-DAzZRw5B.js";import"./useTextField-0WHDBy4X.js";import"./useField-Cf77YSv9.js";import"./TextField.module-8oYDuXgF.js";import"./Label-T2pGIfF_.js";import"./Dialog-Bc7lNCYh.js";import"./RSPContexts-BEMS0R5x.js";import"./OverlayArrow-yySTf1eX.js";import"./useResizeObserver-DvMLkPFg.js";import"./Collection-aHKvBhrz.js";import"./index-bmnj5EFr.js";import"./Separator-BvS3gepe.js";import"./PressResponder-DDcFussT.js";import"./useLocalizedStringFormatter-CR34bLQ9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-hHh3jqau.js";import"./Dialog-jESRdsYE.js";import"./useLocalizedStringFormatter-D-rc0p2G.js";import"./x-Dy43kM-n.js";import"./createLucideIcon-D6lR4S6t.js";import"./Heading-BV9WZ-Ew.js";import"./info-C6cmBZ02.js";import"./Tag-DjU_N1Cw.js";import"./ListBox-1vBwp2mp.js";import"./DragAndDrop-CRwl9qmX.js";import"./inertValue-Cg0csU2_.js";import"./useListState-DoG4Fy93.js";import"./useHighlightSelectionDescription-DPhjyVS-.js";import"./useUpdateEffect-CeDOXu3t.js";import"./useHasTabbableChild-DT8kUtb8.js";import"./check-DaGc71Rj.js";import"./ListBoxSection-BDom8kKe.js";import"./Virtualizer-DKEj32og.js";import"./useObserveElement-Ds6tPfX4.js";import"./chevron-down-BVPpaLCI.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-kaFWMzua.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
