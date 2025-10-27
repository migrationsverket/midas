import{j as n}from"./iframe-DHe7O3YB.js";import{$ as j}from"./Form-qWuzbxkZ.js";import{G}from"./Grid-Do_sjMCI.js";import{G as e}from"./GridItem-B1sQVx3J.js";import{T as r}from"./TextField-WzNKBp0X.js";import{S as I}from"./Select-apjpNqD2.js";import{B as a}from"./Button-zyoNupAk.js";import{R as g,a as b}from"./Radio-DuL0atPe.js";import{C as h}from"./CheckboxGroup-_fi2eDB_.js";import{C as k}from"./Checkbox-Z9Fx-GbY.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-uG4DrbYs.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D5dvEuW7.js";import"./useFocusRing-DNdg1RO0.js";import"./index-BpDGib3c.js";import"./index-BzXfAI-e.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DHZVo5pK.js";import"./TextField-DUb_tqd3.js";import"./FieldError-DxPlW7kP.js";import"./Text-fzIvjG6X.js";import"./Text-BWJyzLHL.js";import"./RSPContexts-BqA7yCGR.js";import"./Group-CM8zcKft.js";import"./Input-BSuN2rIe.js";import"./Hidden-BwKN-Ct7.js";import"./Button-BQbFjbVy.js";import"./useLabels-ByK8mPta.js";import"./useButton-CTl0n0ca.js";import"./useTextField-ClorvVl6.js";import"./useControlledState-Cr1hZmrx.js";import"./useField-D9UztZcR.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CgPuPOyR.js";import"./Dialog-BJf0SFJ5.js";import"./OverlayArrow-CQFkkWT7.js";import"./useResizeObserver-DdLjGoYb.js";import"./Collection-Bdgm8S0Q.js";import"./index-DZlkqf27.js";import"./Separator-DPgq4WUN.js";import"./SelectionManager-DQc8Lfz5.js";import"./useEvent-dyC_FZrC.js";import"./scrollIntoView-BfnXnyY_.js";import"./SelectionIndicator-BgrmwFuS.js";import"./useDescription-BnPwjth8.js";import"./ListKeyboardDelegate-CvIzD7Zk.js";import"./PressResponder-C8pq8zlF.js";import"./useLocalizedStringFormatter-s0APVaC7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvBDZYkN.js";import"./VisuallyHidden-ClxVrDZx.js";import"./useLocalizedStringFormatter-DhR4sC5N.js";import"./x-DcZTwviR.js";import"./createLucideIcon-BLSjYB_Y.js";import"./Heading-C40971bE.js";import"./info-C0s4yH1i.js";import"./Popover-CAMCg5KX.js";import"./Tag-OqpM8DJf.js";import"./ListBox-C6UU2QM2.js";import"./DragAndDrop-CrHMTc0a.js";import"./inertValue-DSW7U0kP.js";import"./useListState-DAdbgnQR.js";import"./useHighlightSelectionDescription-BavXuzNp.js";import"./useUpdateEffect-3f09mw3i.js";import"./useHasTabbableChild-gt8XyaSa.js";import"./check-T_ra17Ah.js";import"./ListBoxSection-cSQUDEpV.js";import"./Virtualizer-BdZenPhv.js";import"./chevron-down-Dzm2AWhF.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BSkwPlWV.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
